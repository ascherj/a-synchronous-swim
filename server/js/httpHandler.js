const headers = require('./cors');
const messageQueue = require('./messageQueue');

var sendResponse = function(res, data, statusCode = 200) {
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(data));
}

var actions = {
  'GET': function(req, res) {

    if (req.url === '/random') {
      var directions = ['up', 'down', 'left', 'right'];
      var randomIndex = Math.floor(Math.random() * directions.length);
      var randomDirection = directions[randomIndex];
      sendResponse(res, randomDirection, 200);

    } else {
      var nextMessage = messageQueue.dequeue();
      if (nextMessage) {
        sendResponse(res, nextMessage, 200);
      }
    }

  },
  'POST': function(req, res) {
    var body = '';
    var message = '';

    req.on('data', (chunk) => {
      body += chunk;
    }).on('end', () => {
      message = JSON.parse(body);
      messageQueue.enqueue(message);
      sendResponse(res, 'Message enqueued', 201);
    });
  }
}

module.exports = (req, res) => {
  var action = actions[req.method];

  if (action) {
    action(req, res);
  } else {
    sendResponse(res, '', 404);
  }
};

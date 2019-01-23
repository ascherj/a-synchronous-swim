const headers = require('./cors');
const messageQueue = require('./messageQueue');


var sendResponse = function(res, data, statusCode = 200) {
  res.writeHead(statusCode, headers);
  res.end(JSON.stringify(data));
}

var actions = {
  'GET': function(req, res) {
    var directions = ['up', 'down', 'left', 'right'];
    var randomIndex = Math.floor(Math.random() * directions.length);
    var randomDirection = directions[randomIndex];
    sendResponse(res, randomDirection, 200);
  },
  'POST': function(req, res) {

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

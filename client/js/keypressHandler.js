$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('button').on('click', (event) => {
  // var directions = ['up', 'down', 'left', 'right'];
  // var randomIndex = Math.floor(Math.random() * directions.length);
  // var randomDirection = directions[randomIndex];
  // SwimTeam.move(randomDirection);

  $.ajax({
    url: 'http://127.0.0.1:3000',
    type: 'GET',
    success: (data) => console.log('server responded with', data),
    error: () => console.log('error')
  });
});



console.log('Client is running in the browser!');

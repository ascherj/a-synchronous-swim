
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('button').on('click', (event) => {
  var directions = ['up', 'down', 'left', 'right'];
  var randomIndex = Math.floor(Math.random() * directions.length);
  var randomDirection = directions[randomIndex];
  SwimTeam.move(randomDirection);
});

console.log('Client is running in the browser!');

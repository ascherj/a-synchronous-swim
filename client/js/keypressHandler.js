$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];

    $.ajax({
      url: 'http://127.0.0.1:3000',
      type: 'POST',
      data: JSON.stringify(direction.toLowerCase()),
      success: (data) => {

        $.ajax({
          url: 'http://127.0.0.1:3000',
          type: 'GET',
          success: (data) => {
            SwimTeam.move(JSON.parse(data));
          },
          error: () => console.log('error')
        });

      },
      error: () => console.log('error')
    });
  }
});

$('button').on('click', (event) => {
  $.ajax({
    url: 'http://127.0.0.1:3000/random',
    type: 'GET',
    success: (data) => {
      SwimTeam.move(JSON.parse(data));
    },
    error: () => console.log('error')
  });
});



console.log('Client is running in the browser!');

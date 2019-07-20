const app = require(app);

$('#survey-link').on('click', event => {
    event.preventDefault();
    app.get('/survey');
  });
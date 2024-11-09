const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const app = express();
const port = process.env.PORT || 3000;  // Render will set this
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;

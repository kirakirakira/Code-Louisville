const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const firstnames = [
  'Kira',
  'Ryan',
  'Emma',
  'Mo'
]

const lastnames = [
  'Hartlage',
  'Hartlage',
  'Hartlage',
  'Helsinki'
]

app.set('view engine', 'pug');

// app.use((req, res, next) => {
//   console.log('Hello');
//   const err = new Error("Oh no!");
//   err.status = 500;
//   next(err);
// });

app.use((req, res, next) => {
  console.log("world");
  next();
});

app.get('/', (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render('index', { name });
  } else {
    res.redirect('/hello');
  }
});

app.get('/cards', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?", hint: "Think about whose tomb it is."});
});

app.get('/sandbox', (req, res) => {
  res.render('sandbox', { firstnames, lastnames });
});

app.get('/hello', (req, res) => {
  const name = req.cookies.username;
  if (!name) {
    res.render('hello');
  } else {
    res.redirect('/');
  }
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

app.post('/goodbye', (req, res) => {
  // clear the cookie
  res.clearCookie('username');
  // redirect to the hello form
  res.redirect('/hello');
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});

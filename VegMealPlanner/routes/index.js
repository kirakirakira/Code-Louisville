// routes/index.js

const express = require('express');
const router = express.Router();
const Meal = require('../models/index');

const { data } = require('../data/meal.json');

router.get('/', (req, res) => {
  // get the data for each day and put in an object
  Meal.find({}).
    where('days').in(['Monday']).
    select('mealName').
    exec();
  // pass the object to the pug template
  res.render('display-week');
});

router.get('/add', (req, res) => {
  res.render('create-meal');
});

router.post('/add', (req, res, next) => {
  if (req.body.timeOfDay && req.body.mealName) {
    // create object with form input
    const mealData = {
      timeOfDay: req.body.timeOfDay,
      mealName: req.body.mealName,
      notes: req.body.notes,
      categories: req.body.categories,
      days: req.body.days
    };

    // use schema's 'create' method to insert doc into mongo
    Meal.create(mealData, (error, meal) => {
      if (error) {
        return next(error);
      } else {
        return res.redirect('/');
      }
    });
  } else {
    const err = new Error('Need at least time of day and meal name');
    err.status = 400;
    return next(err);
  }
});

router.get('/:day', (req, res) => {
  const { day } = req.params;
  const templateData = data[day];

  res.render('display-day', templateData);
});

module.exports = router;

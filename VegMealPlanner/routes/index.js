// routes/index.js

const express = require('express');
const router = express.Router();
const Meal = require('../models/index');

const { data } = require('../data/meal.json');

router.get('/', (req, res) => {
  res.render('display-week');
});

router.get('/add', (req, res) => {
  res.render('create-meal');
})

router.post('/add', (req, res, next) => {

  console.log(req.body.categories);
  console.log(typeof req.body.categories)
  // create object with form input
  const mealData = {
    timeOfDay: req.body.timeOfDay,
    mealName: req.body.mealName,
    notes: req.body.notes,
    categories: req.body.categories
  };
  console.log(mealData);

  // use schema's 'create' method to insert doc into mongo
  Meal.create(mealData, (error, meal) => {
    if (error) {
      return next(error);
    } else {
      return res.redirect('/');
    }
  });
});

router.get('/:day', (req, res) => {
  const { day } = req.params;
  const templateData = data.day;

  res.render('display-day', templateData);
})

module.exports = router;

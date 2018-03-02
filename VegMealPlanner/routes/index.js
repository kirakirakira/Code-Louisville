// routes/index.js

const express = require('express');
const router = express.Router();
const Meal = require('../models/index');

const { data } = require('../data/meal.json');

router.get('/', (req, res) => {
  // get the data for each day and put in an object
  Meal.find({days: {$in: ['Monday']}}, function(err, meals) {
    if(err) return handleError(err);
    // console.log(meals);

    let dayPlan = {"Breakfast": [], "Lunch": [], "Dinner": []};

    for (i = 0; i < meals.length; i++) {
      if (meals[i].timeOfDay === "Breakfast") {
        console.log(meals[i].mealName);
        dayPlan["Breakfast"].push(meals[i].mealName);
      } else if (meals[i].timeOfDay === "Lunch") {
        dayPlan["Lunch"].push(meals[i].mealName);
      } else if (meals[i].timeOfDay === "Dinner") {
        dayPlan["Dinner"].push(meals[i].mealName);
      }
    }

    console.log("Day plan is ", dayPlan["Breakfast"]);
    // pass the object to the pug template
    res.render('display-week', dayPlan);
  });
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
  console.log(templateData);
  res.render('display-day', templateData);
});

module.exports = router;

// src/routes/index.js

const express = require('express');
const router = express.Router();

const { data } = require('../data/meal.json');

router.get('/', (req, res) => {
  res.render('display-week');
});

router.get('/add', (req, res) => {
  res.render('create-meal');
})

router.get('/:day', (req, res) => {
  const { day } = req.params;
  const templateData = data.day;

  res.render('display-day', templateData);
})

module.exports = router;

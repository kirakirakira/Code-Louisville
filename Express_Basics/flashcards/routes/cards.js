const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json'); // const data = require().data;
const { cards } = data;  // equivalent to: const cards = data.cards;

router.get('/', (req, res) => {
  const id = Math.floor(Math.random() * data.cards.length);
  res.redirect(`/cards/${id}`);
});

router.get('/:id', (req, res) => {
  const { side } = req.query; // const side = req.query.side;
  const { id } = req.params;  // const id = req.params.id;

  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }

  const name = req.cookies.username;
  const text = cards[id][side];  // data.cards.id.side
  const { hint } = cards[id];   // data.cards.id.hint

  const templateData = { text, id, name };
  if (side === "question") {
    templateData.hint = hint;
    templateData.oppositeSide = "answer";
  } else if (side === "answer") {
    templateData.oppositeSide = "question";
  } else {
    res.redirect('..');
  }

  res.render('card', templateData);
});

module.exports = router;

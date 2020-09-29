const { json } = require('express');
var express = require('express');
var router = express.Router();

//Messages:

const messages = [
  {
    text: 'Hello!',
    user: 'Harry',
    added: new Date()
  },
  {
    text: 'Hi! How are you?',
    user: 'Dennis',
    added: new Date()
  },
  {
    text: 'Sup',
    user: 'Paige',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});



module.exports = router;

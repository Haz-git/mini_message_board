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

router.post('/new', (req, res, next) => {

  const { messageText, messageUser } = req.body;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect('/')
});



module.exports = router;

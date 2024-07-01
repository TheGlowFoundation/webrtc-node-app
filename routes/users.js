const express = require('express');
const router = express.Router();

const users = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let context = {
    title: 'Users',
    users: users
  }
  res.render('users', context);
});


/*Get single user*/
router.get('/:username', function(req, res, next) {
  let userId = req.params.username;
  let context = {}
  users.forEach(user => {
    if (`${user.fname} ${user.lname}` === userId.toString()) {
      context = {
        title: `${user.fname} ${user.lname}'s Details`,
        id: user["id"],
        username: `${user["fname"]} ${user["lname"]}`,
      }
      res.render('user', context);
    }
  })
})

module.exports = router;

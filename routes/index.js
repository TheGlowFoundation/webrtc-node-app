const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Laz' });
});

router.get('/io', function (req, res, next) {
  res.render('io', {title: 'WebRTC'})
})

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get takes 2 args:
// 1. path
// 2. code to run if someone shows up here
router.get('/', function(req, res, next) {
	// res.render (the controller, 'C') takes 2 args:
	// 1. the view ('V') to load
	// 2. data (the model, 'M') to send to the view
  res.render('index', { title: 'Express Day 1!!' });
});

router.get('/atl-teams', (req, res)=>{
	var atlTeams = [
		'Falcons',
		'United',
		'Hawks',
		'Braves'
	];
	res.render('teams', {atlTeams: atlTeams});
});

module.exports = router;

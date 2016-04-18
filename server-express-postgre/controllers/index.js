var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	return res.json("Api for Simply Petty Cash Application");
});

router.use('/category', require('./category'));
router.use('/user', require('./user'));

module.exports = router;
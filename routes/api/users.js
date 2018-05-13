const express = require ('express');
const router = express.Router();

// @route       GET api/users/test
// @description Test users route
// @access      Private
router.get('/test', (req, res) => res.json ({mgs: "Users Works" }));

module.exports = router;
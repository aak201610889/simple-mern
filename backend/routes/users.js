const router = require('express').Router();
let User = require('../models/user.models')
router.route('/').get((req, res) => {
  User.find().then(users=>res.json(users)).catch(err=>res.status(400).json('ERROR'+err))
})
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const NewUser = new User({ username });
  NewUser.save().then(()=>res.json('users adding')).catch(err=>res.status(400).json('ERROR'+err))
})
module.exports = router;

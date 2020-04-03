const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

// registration form route: GET /auth/register
router.get('/register', (req, res) => {
  // this may have been previously set by trying to 
  // register a duplicate username
  let messageToDisplay = req.session.message

  // prevent the message from showing up more than once
  req.session.message = ''

  res.render('/register.ejs', {
    message: messageToDisplay
  })
})


// register route: POST /auth/register
router.post('/register', async (req, res, next) => {

  try {
    // create a user in the database
    console.log(req.body);
    const desiredUsername = req.body.username
    const desiredPassword = req.body.password
    const userWithThisUsername = await User.findOne({
    	username: desiredUsername
    })
    console.log(userWithThisUsername);

    if(userWithThisUsername) {
      console.log("username exists")
      req.session.message = `Username ${desiredUsername} already taken.`
      res.redirect('/register')
    }
    else {
      const salt = bcrypt.genSaltSync(10)
      const hashedPassword = bcrypt.hashSync(desiredPassword, salt)
      const createdUser = await User.create({
        username: desiredUsername,
        password: hashedPassword
      })

      req.session.loggedIn = true
      req.session.userId = createdUser._id
      req.session.username = createdUser.username
      req.session.message = `Thanks for signing up, ${createdUser.username}`
      res.redirect('/')
    }

  } catch(error) {
    next(error)
  }

})


router.get('/auth', (req, res) => {
	res.send('hey sup')
})



module.exports = router
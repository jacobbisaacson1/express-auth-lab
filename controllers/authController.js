const express = require('express')
const router = express.Router()

router.get('/auth', (req, res) => {
	res.send('hey sup')
})



module.exports = router
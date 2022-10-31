const express = require('express')
const router = express.Router()

router.all('/', (req, res) => {
    console.log('PRUEBA')
    res.json({ title: 'Hello world' })
})

module.exports = router
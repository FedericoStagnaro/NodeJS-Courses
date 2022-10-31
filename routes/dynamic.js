const express = require('express')
const router = express.Router()

router.get('/:dato/:id', (req, res) => { 
    const { dato } = req.params
    const { id } = req.params
    console.log(dato, typeof dato)
    console.log(id, typeof id)
 })

module.exports = router
const express = require('express')
const router = express.Router()

router.get('/:categoria/:id', (req, res) => { 
    const { categoria } = req.params
    const { id } = req.params
    console.log(categoria, typeof categoria)
    console.log(id, typeof id)

    res.render('dynamic.pug', {
        data: {
            categoria,
            id
        }
    })
 })

module.exports = router
const express = require('express')
const router = express.Router()

const fileReader = require('./fileReader')

router.get('/', (req, res) => {
  res.redirect('/genres')
})

router.get('/genres', (req, res) => {
  fileReader.readGenres((genres) => {
    res.render('genres/index', {genres})
  })
})

router.get('/genres/:id', (req, res) => {
  fileReader.readGenre(req.params.id, (genre) => {
    res.render('genres/view', genre)
  })
})

module.exports = router

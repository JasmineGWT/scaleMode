const fs = require('fs')

readGenres = (callback) => {
  fs.readFile(`${__dirname}/data.json`, 'utf8', (err, res) => {
    if (err) console.log(err)
    else callback(JSON.parse(res))
  })
}

readGenre = (id, callback) => {
  readGenres((genres) => {
    let genre = genres.find((genre) => {
      return genre.id == id
    })
    callback(genre)
  })
}

module.exports = {
  readGenres,
  readGenre
}

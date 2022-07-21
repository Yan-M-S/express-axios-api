const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

// app.route('/').get((req, res) => res.send('Home')) //home do site

// app.route('/about').get((req, res) => res.send('Section about')) // seção sobre do site

app.route('/').get((req, res) => {
  axios
    .get('https://api.github.com/users/Yan-M-S')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error))
})

const express = require('express');
const app = express();
const hbs = require('hbs');
const path     = require('path') 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
const clientId = 'd913607657a049c2a7f75e738050dfb6',
    clientSecret = 'a600443760cf409e83583a8582aece29';

const spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});



app.get('/', function (req, res) {
  res.render('index')
})

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/users/:username', function (req, res) {
  res.send(req.params)
})

app.get('/:a/:b/:c', function (req, res) {
  res.send(req.params)
})

app.get('/search', function (req, res) {
  res.send(req.query)
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))

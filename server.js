const express = require('express');

const app = express();


app.get('/greeting/:name', function(req, res) {
  console.log(req.params)
  res.send('Wow! Hello there, ' + req.params.name);
})

app.listen(3000, function () {
  console.log('Listening on port 3000');
})
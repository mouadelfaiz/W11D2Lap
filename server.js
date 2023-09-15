const express = require('express');

const app = express();

//*Greetings
app.get('/greeting/:name', function(req, res) {
  console.log(req.params)
  res.send('Wow! Hello there, ' + req.params.name);
})

//*Tip Calculator
app.get('/tip/:total/:tipPercentage', function(req, res) {
  console.log(req.params);
  res.send('Your bill is $' + req.params.total + " and your tip percentage is " + req.params.tipPercentage + "% so you should tip" + "$" + (req.params.tipPercentage / req.params.total) * 100)
})

app.listen(3000, function () {
  console.log('Listening on port 3000');
})
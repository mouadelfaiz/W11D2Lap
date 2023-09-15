const express = require('express');

const app = express();

const magic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
//* Greetings
app.get('/greeting/:name', function(req, res) {
  console.log(req.params)
  res.send('Wow! Hello there, ' + req.params.name);
})

//* Tip Calculator
app.get('/tip/:total/:tipPercentage', function(req, res) {
  console.log(req.params);
  res.send('Your bill is $' + req.params.total + " and your tip percentage is " + req.params.tipPercentage + "% so you should tip" + "$" + (req.params.tipPercentage / req.params.total) * 100)
})

//* Magic 8 Ball
app.get('/magic/', (req, res) => {
  res.send(magic)
})

app.get('/magic/:indexOfRandomMagic8Ball', function(req, res) {
  console.log(req.params);
  res.send(`<h1>${magic[Math.floor(Math.random(req.params.indexOfRandomMagic8Ball) * magic.length)]}</h1>`)
})
app.listen(3000, function () {
  console.log('Listening on port 3000');
})
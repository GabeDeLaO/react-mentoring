const express = require('express'); 
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/test', function(req, res) {

  let it = 'hey man';
  console.log('req', req);
  res.json({ data: it});
})

app.get('/', function(req, res) {
  res.json('Howdy mate!');
})

app.listen(process.env.PORT || 8080);
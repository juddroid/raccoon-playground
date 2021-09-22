const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const item = require('./src/api/items');

app.use(cors());
app.use(express.static(__dirname + '/public'));
// app.use('/itemRouter', item);
app.use('/api/items', item.router);

// console.log(item);

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.post('/', (req, res) => {
  res.send('post');
});

app.put('/user', (req, res) => {
  res.send('put');
});

app.delete('/user', (req, res) => {
  res.send('delete');
});

console.log(__dirname);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.send('Hello, GET world!\n');
});

app.post('/test', (req, res) => {
  return res.send('Hello, POST world!\n');
})

app.listen(3000, () => console.log('Nodejs server is listening on TCP port 3000'));
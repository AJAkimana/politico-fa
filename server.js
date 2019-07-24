import express from 'express';
import path from 'path';
const port = process.env.PORT || 6700;
const app = express();

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

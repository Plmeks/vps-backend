var express = require("express");

var app = express();

var data = [{
  id: 1,
  title: 'Who is Dragon',
  body: 'Long text here',
  slug: 'who-is-dragon'
}, {
  id: 2,
  title: 'Look at yourh hand closely',
  body: 'Long text here',
  slug: 'look-hand'
}, {
  id: 3,
  title: 'Test title',
  body: 'Test text',
  slug: 'test-title'
}];

app.get('/posts', (req, res) => {
  return res.json(data);
});

app.get('/post/:slug', (req, res) => {
  return res.json(data.find(post => post.slug === req.params.slug));
});

app.listen(3001, () => {
  console.log('Started at port', 3001);
});

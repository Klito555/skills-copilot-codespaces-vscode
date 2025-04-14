// Create web server
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load comments from JSON file
function loadComments() {
  const data = fs.readFileSync('comments.json', 'utf8');
  return JSON.parse(data);
}

// Save comments to JSON file
function saveComments(comments) {
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
}

// Get all comments
app.get('/comments', (req, res) => {
  const comments = loadComments();
  res.json(comments);
});



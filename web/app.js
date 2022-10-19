const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// enabling CORS for all requests
app.use(cors());

app.use(express.static(path.join(__dirname, './client/build')));

app.get("/api", function(req, res) {
  res.send({"name": "DEEz nuts"}) // Should be json format
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.listen(3000);
var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World 12312");
});

app.listen(4000);

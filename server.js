const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require('./route/router');

app.use(router);

app.listen(port, err => {
  if(err)
    console.log(err);
  else
    console.log("Running server successfully!");
});
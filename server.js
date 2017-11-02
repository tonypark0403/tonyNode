const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

router.get("/", function(req, res){
  res.send("Welcome to Tony's Home!");
});

app.use(router);

app.listen(port, err => {
  if(err)
    console.log(err);
  else
    console.log("Running server successfully!");
});
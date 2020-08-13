const cars = require("./cars.json");
const express = require("express");
const app = express();

app.get("/cars", (req, res)=>{
  res.send(cars);
});

app.listen(5000, () => {
  console.log('server has running');
});

var crudRouter = require('./routes/crud-route');
const express = require('express');
const app = express()
app.set("view engine", "ejs");

app.use('/', crudRouter);
//app.get('/', function (req, res) {
 //   res.redirect('crud-form')
 // })



  app.listen(3000)
  console.log("ok");
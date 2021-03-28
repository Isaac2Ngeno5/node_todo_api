const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res)=>{
  res.status(200).send({
    status: true,
    message: "hello, Welcome to Node"
  })
})

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
  console.log(`listening on http://localhost:${PORT}`);
});
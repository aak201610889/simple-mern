const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
require('dotenv').config();
const app = express();
const port = process.env.port || 5000;
app.use(cors());
app.use(express.json())
//connect to database
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true })

const connection =
  mongoose.connection;
connection.once('open', () => {
  console.log('Mongodb database connecting well');
 })

app.get('/',(req,res)=>{res.send('hello')})
app.listen(port ,()=>{console.log('server on port '+port);})
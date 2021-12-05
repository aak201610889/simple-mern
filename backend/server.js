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
const exerciseRouter = require('./routes/exercises')
const userRouter=require('./routes/users')

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => { console.log('server on port ' + port); })
//TODO: CHECK FOR API
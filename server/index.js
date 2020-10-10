require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const massive = require('massive');


app.use(express.json());


//session set up
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}));


//massive set up
massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected')
})



//auth controllers






app.listen(SERVER_PORT, () => console.log(`server is running on ${SERVER_PORT}`))
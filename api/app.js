const express = require('express');
const {dbConnection} = require('./DB/db.Connection');
const authRouter = require('./routes/auth');
const userRouter = require ('./routes/users');
const postRouter = require('./routes/posts');


const app = express();

require('dotenv').config()


//middleWare
app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter );
app.use('/api/posts',postRouter );




//database connection
dbConnection()

app.listen(process.env.PORT, () => {
    console.log('App listening on port 5000!');
});
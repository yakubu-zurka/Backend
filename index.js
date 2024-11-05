import express from  'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import route from './Routes/UserRoutes.js';

import dotenv from 'dotenv';


const  app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT =  process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT,  () => {
        console.log(`server running on port ${PORT}`);
    })
}).catch((error)=> console.log(error));


app.use('/api/user' , route)



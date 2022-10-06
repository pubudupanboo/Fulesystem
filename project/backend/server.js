const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');



dotenv.config();

//mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("db connected"));
mongoose.connect("mongodb+srv://pubudu:msk123456789@cluster0.rbmccvm.mongodb.net/mytable?retryWrites=true&w=majority",()=>console.log("DB Conected"));

app.use(express.json());
app.use(cors());
app.use('/app',routesUrls);
app.listen(4000,()=>console.log("Server run pubudu "));

require('dotenv').config({ path: './config.env'});
const express = require('express');

const bodyParser =require('body-parser');
const cors = require('cors');

const res = require('express/lib/response');
const port = process.env.PORT || 4005;
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const employeeRoute = require('./routes/employeeRoute');
const productRoute = require('./routes/productRoute');
app.use("/product", productRoute);
app.use("/employee", employeeRoute);
app.post("/register", (req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.tel);
    res.send("Hello from register" + req.body.name + "," + req.body.email);
});


app.listen(port,()=>{
    console.log("App is running on " + port);
});


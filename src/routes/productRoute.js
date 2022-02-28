const express = require('express');
const app = express.Router();
const productContoller = require('../controllers/productController')


app.get("/",productContoller.getProducts);

app.get("/:id",productContoller.getProductById);

app.get("/name/:name",productContoller.getProductByName);


app.get("/price/:price",productContoller.getProductByPrice);

app.post("/", productContoller.addProduct);


module.exports = app;
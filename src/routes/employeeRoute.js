const express = require('express');
const app = express.Router();
const employeesController = require('../controllers/employeesController')

app.get("/",employeesController.getemployee);

app.get("/:id",employeesController.getemployeeById);

app.get("/tax/:sal",employeesController.getemployeeBysal);

app.get("/retire/:age",employeesController.getemployeeByAge);

app.post("/", employeesController.addemployee);

module.exports = app;
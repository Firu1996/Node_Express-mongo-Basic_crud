const express = require('express');
const app = express();

app.use(express.json());

const employees = require('./routes/employeeRoute');
app.use('/api/employee', employees);

module.exports = app
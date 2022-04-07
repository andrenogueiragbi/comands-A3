const express = require('express');

const routes = express.Router();


routes.get('/online', (req, res) => {
    res.status(200).send('<h> WELCOME API!!! V 1.6  (C) MICKS 2021-2022 </h>')});


module.exports = routes;



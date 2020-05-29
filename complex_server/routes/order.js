const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { Order } = require("../models/order");

router.post('/', (req, res)=>{


    (async () => {

        Order.create({
            email: req.body.email,
            houseId: req.body.houseId,
            houseName: req.body.houseName,
            message: req.body.message,
            name: req.body.name,
            phone: req.body.phone,
            prise: req.body.prise
        });



        res.send(200)

    })();

});


module.exports = router;

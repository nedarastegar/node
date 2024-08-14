const express = require("express");
const router = express.Router();

const homeController = require('./../../http/controller/homeController')

router.get('/',homeController.index)

router.post('/',(req,res)=>{
    res.json(req.body)
})

module.exports = router



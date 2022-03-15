const express = require("express");


const { Router } = express;
const router = new Router();


router.get("/", (req, res)=>{
    res.sendFile("index.html")
})

module.exports = router
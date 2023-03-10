const express = require("express")

const router = express.Router()

const User = require("../../models/User")

router.post("/signup",(req,res) => {
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err))
})

router.get("/login",(req,res) => {
    
})

module.exports = router
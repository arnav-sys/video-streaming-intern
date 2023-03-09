const express = require("express")
const router = express.Router()

const Video = require("../../models/Video")

router.get("/",(req,res) => {
    Video.find().then(videos => res.json(videos))
    .catch(err => res.status(404).json({videosnotfound:"no videos found"}));
})

module.exports = router
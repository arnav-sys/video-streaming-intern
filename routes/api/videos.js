const express = require("express")
const router = express.Router()

const Video = require("../../models/Video")

router.get("/",(req,res) => {
    Video.find().then(videos => res.json(videos))
    .catch(err => res.status(404).json({videosnotfound:"no videos found"}));
})

router.post("/",(req,res) => {
    Video.create(req.body)
    .then(video => res.json({msg:"Video added successfully"}))
    .catch(err => res.status(400).json({error:"unable to add video"}))
})

router.get("/:id",(req,res) => {
    Video.findById(req.params.id).then(video => res.json(video))
    .catch(err => res.status(404).json({novideofound:"no video of this id is found"}))
})

module.exports = router
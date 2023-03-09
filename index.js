const express = require("express")
const connectDB = require("./config/db")
const VideoRoute = require("./routes/api/videos")
const app = express();
const cors = require("cors");

app.use(cors())
connectDB();

app.get("/",(req,res) => {
    res.send("Hello worlds");
})

app.use("/api/video",VideoRoute);

const port = process.env.PORT || 8082;

app.listen(port,() => {
    console.log(`Server runing on port ${port}`)
})


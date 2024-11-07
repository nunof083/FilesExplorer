import fs from "fs";
import express from "express";
import path from "path";
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/data", (req, res) => {

})


app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})
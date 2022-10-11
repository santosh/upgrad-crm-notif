const express = require("express")
const mongoose = require("mongoose")
const serverConfig = require("./configs/server.config")
const dbConfig = require("./configs/db.config")

mongoose.connect(dbConfig.DB_URL)
const db = mongoose.connection

db.on("error", () => {
  console.log("Error while connecting to the MongoDB server");
})

db.on("open", () => {
  console.log("Connected to the MongoDB server");
})

const app = express()
app.use(express.json())

require("./routes/notification.route")(app)

app.listen(serverConfig.PORT, () => {
  console.log(`Listenting for request on ${serverConfig.PORT}`);
})

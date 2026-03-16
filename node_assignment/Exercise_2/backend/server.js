const express = require("express")
const cors = require("cors")

const userRoutes = require("./routes/userRoutes")
const studentRoutes = require("./routes/studentRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/users", userRoutes)
app.use("/students", studentRoutes)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
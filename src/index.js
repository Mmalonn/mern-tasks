//requires
const express = require("express");
const morgan = require("morgan");
const app=express();
const path = require("path");
const {mongoose} = require("../database");



//settings
app.set("port",process.env.PORT || 3000)

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/tasks", require("./routes/task.routes"))


//static files
app.use(express.static(path.join(__dirname,"public")))

//startin the server
app.listen(app.get("port"),()=>{
    console.log(`Server on port ${app.get("port")}`);
})


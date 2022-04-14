const express = require("express");
const router = express.Router();
const Task=require("../models/task")

router.get("/", async (req,res)=>{
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.get("/:id", async(req,res)=>{
    const task=Task.findById(req.params.id);
    res.json(task);
})

router.post("/", async(req,res)=>{
    const {title,description}=req.body
    const task = new Task({
         title:title,
         description:description
    })
    await task.save();
    console.log(task);
    res.json({status:"tarea guardada"})

})

router.put("/:id", async (req,res)=>{
    const {title,description} =req.body;
    const newTask={title,description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status:"tarea actualizada"});
})

router.delete("/:id", async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({status:"tarea eliminada"})
})

module.exports = router;
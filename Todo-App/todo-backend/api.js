const express = require('express')
const app = express()
const cors = require('cors')
const { model } = require('./model')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/addTask',async(req,res)=>{
    const doc = await model.create({
        Task:req.body.Task,
        Status:req.body.Status,
        Date:req.body.Date,
    })
    res.json(doc)
})

app.get('/getTasks',async(req,res)=>{
    res.send(await model.find({}))
})

app.delete('/deleteTask/:id', (req, res) => {
    const { id } = req.params;
    
    // Assuming you are using MongoDB, use the following:
    model.findByIdAndDelete(id)
      .then(() => res.status(200).send({ message: 'Task deleted successfully' }))
      .catch(err => res.status(500).send({ message: 'Error deleting task', err }));
  });
  

app.listen(3000)
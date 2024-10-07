const mongoose = require('mongoose')

const connectDB = async() => {
    mongoose.connect('mongodb://127.0.0.1/todoapp')
    await console.log('Connected to DB')
}

connectDB()

const Schema = new mongoose.Schema({
    Task:String,
    Status:String,
    Date:String,
})

const model = mongoose.model('todos',Schema)

module.exports = { model }
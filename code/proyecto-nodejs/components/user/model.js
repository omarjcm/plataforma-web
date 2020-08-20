const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    user: String,
    name: String,
    lastName: String,
})

const model = mongoose.model('User', mySchema)
module.exports = model
const {Schema, model} = require('mongoose')
// const { schema } = require('./Case.js')

const requestSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    location: String,
    description: String,
    case:[{
        type:Schema.Types.ObjectId,
        ref:"Case"
    }]

}, {timestamps: true })

const Request = model("Request", requestSchema)

module.exports = Request
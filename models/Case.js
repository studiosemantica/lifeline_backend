const {Schema, model} = require('mongoose')

const caseSchema = new Schema({
    type: String,
    emergency: Boolean,
}, {timestamps: true})

const Case = model("Case", caseSchema)

module.exports = Case


const mongoose = require('mongoose');

const menue = new mongoose.Schema({
    m_type : {
        type : String,
        required: true
    },
    size : {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },
    rate : {
        type : Number,
        required: false
    }
    
})

module.exports = mongoose.model('this_menue', menue )
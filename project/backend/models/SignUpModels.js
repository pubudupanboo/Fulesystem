const mongoose = require('mongoose');

const signupTemplete = new mongoose.Schema({

    fullName:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    vehicalnumber:{
        type:String,
        require:true
    },
    qrcode:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    quata:{
        type:String,
        default:"20"
    }

});

module.exports = mongoose.model('mytable',signupTemplete);
const mongoose = require('mongoose');

const checkAlreadyVehicalModelTemplete = new mongoose.Schema({

   
    vehicalnumber:{
        type:String,
        require:true
    },
    vehicaltype:{
        type:String,
        require:true
    },
    quata:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
   

});

module.exports = mongoose.model('alreadyregisterdvehicallist',checkAlreadyVehicalModelTemplete);
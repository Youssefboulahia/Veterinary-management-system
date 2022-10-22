var mongoose  = require("mongoose"),
appointmentSchema = mongoose.Schema({
    date:{type:Date, required:true},
    hour:{type:String, required:false},
    description:  {type:String, required:false},
    user :{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
  
    },
    veterinary :{
 
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
   
    }, 
    status :{
        type:Boolean, default: false
    }
});
module.exports = mongoose.model("Appointment",appointmentSchema);
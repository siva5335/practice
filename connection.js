const mongoose=require("mongoose");

const connectdb = async () =>{
    try {
        mongoose.connect("mongodb+srv://sivakumar:sivakumar5335@cluster0.vyu3pn5.mongodb.net/siva");
        console.log("databasse connected");
    } catch (err) {
        console.log(err);
    }
}

connectdb();

const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:4
    }
})

const User = mongoose.model("user",userschema);

module.exports = User;


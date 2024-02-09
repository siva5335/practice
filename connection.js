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


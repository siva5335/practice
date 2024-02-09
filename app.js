const express=require("express");
const User = require("./connection");



require("./connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})
 

app.post('/signup',async (req,res)=>{
    const name =req.body.name;
    const password = req.body.password;
    console.log(name,password);
    try {
       const user =await User.create({name,password});
       if(user){
        res.status(200).send("user parcel");

       } 
    } catch (err) {
        console.log(err);
        
    }
})




app.listen(3000,()=>{
    console.log("server is running at 3000");
})
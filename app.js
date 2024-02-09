const express=require("express")

const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname+"/login.html");
})

app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
})


app.listen(3000,()=>{
    console.log("server is running at 3000");
})
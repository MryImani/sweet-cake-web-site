const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/grid-gallery",function(req,res){
    res.sendFile(__dirname+"/grid-gallery.html");
})
app.listen(process.env.PORT||3000,function(){
    console.log("server is running on port 3000");
})
const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
app.get("/",(req,res,next)=>{
	res.send("Home Page Welcome from ridip");
});
app.get("/about",(req,res,next)=>{
	res.send("About Page Welcome from ridip");
});
app.get("/contact",(req,res,next)=>{
	res.send("Contact Page Welcome from ridip");
});
app.get("*",(req,res,next)=>{
	res.send("Error Page");
});
app.listen(port,()=>{
	console.log("Server runing");
});
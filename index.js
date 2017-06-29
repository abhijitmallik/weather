const express = require('express');
const app = express();
const path = require('path');


app.set('view engine','ejs');
app.set('views',__dirname+'/public');
app.use(express.static('deploy'));
app.set(express.static(path.join(__dirname, 'public')));
app.get("/",(req,res)=>{
	res.render('blank');
})

app.listen(3000,()=>{
	console.log("server is running in port 3000");
})
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const fileupload=require('express-fileupload')
const cors=require('cors')
const mongoose=require('mongoose')
try{
    mongoose.connect('mongodb+srv://rhu123:<password>@cluster0.wgjzu.mongodb.net/banner?retryWrites=true&w=majority')
    console.log('db connected')
}
catch(err){
     throw err
}

var schema=new mongoose.Schema({
    item:String,
    name:String,
    description:String,
    url:String
})
var model=mongoose.model('image',schema)
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileupload())
app.use(cors())

app.get("/", (req, res) => res.json({ msg: "Api is running" }));

app.listen(8080, function(req, res){
    console.log('server listening at port no 8080')
});

app.get("/images",async(req,res)=>{
    try{
        
        model.find({},function(err,data){
            res.send(data)
        })
    }
    catch{

    }
})




app.post("/upload",async (req, res) => {
    try{
        const file=req.files.file
      
        let db_data={
            item: "./uploads/"+ file.name,
            name:req.body.name,
            description:req.body.description,
            url:req.body.url
            
        }
        
        file.mv('./frontend/src/uploads/'+ file.name , function(err,result){
            if(err){
                throw err
            }
            else{
                res.json({msg:'file uploaded'})
                console.log(name)
            }
        })
        model(db_data).save(function(err,data){
            if(err) throw err
            
            res.json({msg:'db saved'})
        })
        
        
    }catch (e) {
        console.error(e.message);
      }
  
      
    }
  );

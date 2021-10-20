var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
var config =require ('./config');
var postRoute =require ('./routes/posts.js');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

// app.get("/", (req, res) => {
//   res.json({
//     author: "Ogulcan",
//     message: "Hello, MERN is awesome!",
//   });
// });

app.use('/api/posts', postRoute);
mongoose.connect(process.env.MONGODB_URL ||'mongodb+srv://dbUser:Captain@blog.qr81l.mongodb.net/blog?retryWrites=true&w=majority');
const mongodbUrl = config.MONGODB_URL;
mongoose .connect(mongodbUrl, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    
  })
   .catch((error) => console.log(error.reason));
  


  if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'));
  
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  
  });
  }
  app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
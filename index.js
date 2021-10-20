var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var dotenv = require('dotenv');

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

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT} `);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
  if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'));
  
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  
  });
  }
  app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
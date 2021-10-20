var dotenv =require('dotenv');

dotenv.config();

module.exports={
 PORT: process.env.PORT || 8080,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://dbUser:Captain@blog.qr81l.mongodb.net/blog?retryWrites=true&w=majority',
  

};

const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/apartamentos',{
mongoose.connect('mongodb+srv://Coconutella10:Coconutella10@cluster0.md5x3.mongodb.net/apartamentos',{
// mongoose.connect('mongodb+srv://omargreyes:Coconutella@cluster0.wrghu.mongodb.net/notes-app',{
    useCreateIndex:true, //Obligatoria
    useNewUrlParser:true, //Obligatoria
    useFindAndModify:false
}).then(db => console.log('DB is connected'))
  .catch(err=>console.log(err));


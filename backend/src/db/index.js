const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/proyecto', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    },mongoose.set('strictQuery', false))
.then(ok => console.log('db conectada'))
.catch(err => console.log(err));



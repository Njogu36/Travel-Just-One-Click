const express = require('express');
const app = express();





app.set('view engine','jade');
app.set('/views','./views');

app.use(express.static('public'));

const  index = require('./routes/index.js');
app.use('/',index);

app.listen(process.env.PORT || 7000,function(){

console.log('app is running on port 7000');
})

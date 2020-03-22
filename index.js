const express = require('express');
const routes = require('./routes');
const bodyParser=require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use('/',routes());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));
app.listen(3000);
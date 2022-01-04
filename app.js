const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');



const app = express();
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));


//#################################################### Mongoose ####################################################

//--------------------------------- Connection ---------------------------------
const dbName = 'wikiDB';
mongoose.connect('mongodb://localhost:27017/' + dbName);

//-------------------------- Article Schema and Model---------------------------
const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model('Article', articleSchema);



//################################################### route: '/' ###################################################
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});


//################################################### app.listen ###################################################
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
})
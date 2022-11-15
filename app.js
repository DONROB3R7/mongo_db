// Express Require Values
const express = require('express');
const app = express();
const port = 3000;

// Require Path 
const path = require('path')
const hbs = require('hbs');

// Static Express Value
app.use(express.static('public'));


//Loads the handlebars module
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

// Register view engine
app.set('view engine', 'hbs');

app.use((req,res,next) => {
    // console.log(path.join(__dirname, 'views'));
    // console.log(__dirname, 'views');
    // console.log(path.join(__dirname));
    // console.log(__dirname);
    next();
})


app.get('/' , (req, res) =>{
    // res.send(app.get('title'));
    // res.send('Send This Message');
       res.render('index');
})


app.get('/home' , (req,res) => {
    res.send('This is a home page');
})

app.listen(port, () => console.log(`Connected to MongoDb ${port}`));
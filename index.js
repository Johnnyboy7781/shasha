const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exhbs = requre('express-handlebars');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Handlebars setting
app.set("view engine","hbs");
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout: 'index'
    layoutsDir: __dirname + 'views/layouts',
    partialsDir: __dirname + 'views/partials',
}));

const port = 8900;
app.listen(port);
console.log(`Listening to server: http://localhost:${port}`);

// Landing page
app.get('/', (reg,res)=>{
    res.send("Hello!!");
})

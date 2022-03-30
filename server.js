const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({})

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars setting
app.engine("handlebars", hbs.engine)
app.set("view engine","hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
})

// Landing page
app.get('/', (req ,res)=>{
    console.log("Success");
    res.status(500).json({ message: "success" });
})
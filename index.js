const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/auth')
const errorController = require('./controllers/error')

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, DELETE ');
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type,Accept, X-Custom-Header, Authorization ');
    next();
});

app.use('/',authRoutes);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(port, ()=>console.log(`listening on port ${port}`))

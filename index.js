const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const routes = require("./src/routes/v1/routes");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', routes);
db.then((database) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(console.log);
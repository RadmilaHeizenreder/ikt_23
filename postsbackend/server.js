const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', routes);

// mongoDB connecten
mongoose.connect(process.env.DB_CONNECTION, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', console.error.bind('connection error:'));
db.once('open', () => console.log('connected to database'));


app.listen(PORT, (error) => {
    if(error) {
        console.log('error', error);
    } else {
        console.log(`Server listening on port ${PORT}`);
    }
});


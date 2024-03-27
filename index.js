const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json())
app.use('/api', routes); 


mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server running');
        });
    })
    .catch((err) => {
        console.error('Could not connect to MongoDB', err);
    });
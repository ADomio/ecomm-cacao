const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

// .env
require('dotenv').config();

const Router = require('./routes/index.routes.js');
// Database
require('./config/mongo');

const app = express();
const PORT = process.env.PORT || 5000;

// cores middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

if(process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

// serve uploaded files
app.use(express.static('uploads'));

// Router
app.use(Router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app; // for testing
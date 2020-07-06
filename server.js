const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./repos/Dataset');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

const app = express();

connectDB();

app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use('/dataset', router);

app.listen(PORT, () => {
    console.log("Server running on Port " + PORT);
});
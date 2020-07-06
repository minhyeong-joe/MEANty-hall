const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => {
    console.log("Server running on Port " + PORT);
});
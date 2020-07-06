const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then((conn) => console.log(`MongoDB connected to: ${conn.connection.host}`))
    .catch((err) => console.error(`Error: ${err}`));
}

module.exports = connectDB;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err.message);
    }

};

module.exports = dbConnect;
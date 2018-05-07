const mongoose = require('mongoose');

mongoose.Promise = Promise;

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.error('Could not connect to MongoDB', err);
    }
};

const disconnectFromDb = async () => {
    try {
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    }
    catch (err) {
        console.error('Could not disconnect from MongoDB', err);
    }
};

module.exports = {connectToDb, disconnectFromDb};
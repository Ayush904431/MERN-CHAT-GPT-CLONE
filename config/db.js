const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(
            `Connected to MongoDB Database ${mongoose.connection.host}`.bgGreen.white
        );
        
    } catch (error) {
       console.log(`MongoDB Connection Error ${error}`.bgRed.white); 
    }
};

module.exports = connectDB ;
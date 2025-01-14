// require('dotenv').config()
const mongoose = require("mongoose")

exports.connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fahad:AGQft4DM7bHgxbJI@cluster0.lq9nsib.mongodb.net/Urban_Clothe')
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}
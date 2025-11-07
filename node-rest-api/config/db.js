const mongoose = require('mongoose')

const dbConnect = async () => {
    console.log("dddddddddd")
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log("error connecting to db")
        console.log(err)
    }
}
module.exports = dbConnect;
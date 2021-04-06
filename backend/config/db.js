import mongoose from 'mongoose'
import colors from 'colors'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.inverse)
    } catch (error) {
        console.log(`DB connection error: ${error.message}`.underline.red)
        process.exit(1)
    }
}

export default connectDB
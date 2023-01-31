import mongoose from 'mongoose'
require('dotenv').config()

const db = process.env.mongoURL;

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);

    //Exit Process with failure
    process.exit(1);
  }
};

export default connectDB
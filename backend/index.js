import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import imageUploadRouter from './routes/imageUpload.js'
dotenv.config();

const app = express();

app.use(express.json({ limit: '10mb' })); 

app.use(cors());

const PORT = process.env.PORT || 5000;
const connectionString = process.env.MONGO_URL;
console.log('MongoDB connection string:', connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });
  
  db.once('open', () => {
    console.log('Connected to MongoDB database');
  });
  app.use("/api/v1",imageUploadRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

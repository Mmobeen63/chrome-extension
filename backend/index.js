import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import connectDB from './config/db.js';
import selectedTextRouter from './routes/selectedTextRouter.js'

const app = express();
const port = process.env.PORT;


// Middleware
app.use(cors());
app.use(express.json());
connectDB();

app.use('/api/texts',selectedTextRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import apiRoutes from './routes/apiRoutes.js';

dotenv.config();
connectDB();

const app=express();
const PORT=7000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/auth',authRoutes);
app.use('/api/apis',apiRoutes);



app.get('/',(req,res)=>{
    res.send('API Rate Limit Monitor Server is Running');
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
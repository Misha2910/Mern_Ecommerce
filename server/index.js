import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'

// config dotenv
dotenv.config()

// connection to database
connectDB();

// rest object
const app = express()

// middlewares
app.use(express.json());
app.use(morgan('dev'));


// rest api
app.get('/' , (req,res)=>{
    res.send('<h1>Welcome to Ecommerce App</h1>')
})

// port
const PORT =  process.env.PORT || 8080
app.listen(PORT , ()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
})
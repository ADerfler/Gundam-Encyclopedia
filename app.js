const path = require("path")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const mongodb = require("mongodb")
const morgan = require("morgan")
const router = express.Router();
const homeRoutes = require('./routes/home')

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Load config
dotenv.config({ path: './config/config.env' })

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routes
app.use('/', homeRoutes)

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
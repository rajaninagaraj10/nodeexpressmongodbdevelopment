const express = require('express');

//initialize express app
const app = express();
//import colors for console text colors
const colors = require('colors')
const dotenv = require('dotenv')
const dbConnect = require('./config/db.js')

//body parser middleware
app.use(express.json());

const sampleData = [{
    id: 1,
    name: 'Sample Item',
    description: 'This is a sample item.'
}, {
    id: 2,
    name: 'Another Item',
    description: 'This is another sample item.'
}, {
    id: 3,
    name: 'Third Item',
    description: 'This is the third sample item.'
}];

// API Route to get items
app.get('/items', (req, res) => {
    res.status(200).json(sampleData);
})

//API route to post item
app.post('/items', (req, res) => {
    const item = req.body;
    console.log('Received item:', item);
    sampleData.push(item);
    res.status(201).json(sampleData);
})

// load env vars for DB
dotenv.config({path: './config/config.env'})

// connect to database
dbConnect()


// import routes
const bookRoutes = require('./api/routes/book.route')
app.use('/api/books', bookRoutes)
    
const PORT = process.env.PORT || 5000

// setup server to listen on PORT
app.listen(PORT, () => {
     console.log(`server is running in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold)
});





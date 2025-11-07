const express = require('express')
const router = express.Router()

const { getAllBooks } = require('../controllers/book.controller')

router
    .route('/')
    .get(getAllBooks)


module.exports = router;
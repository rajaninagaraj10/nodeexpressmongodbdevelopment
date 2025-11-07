const Book = require('../models/book.model');

// Get All Books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            error: false,
            message: 'books fetched successfully',
            count: books.length,
            data: books
        })
    }catch(error){
        res.status(500).json({
            error: true,
            message: error.message
        })
    }
}

// Get Book By Id


// Create Book


// Update Book


// Delete Book
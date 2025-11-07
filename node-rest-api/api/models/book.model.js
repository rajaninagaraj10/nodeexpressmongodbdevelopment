const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        maxlength: 50,
        required: [true, 'title is required field'],
        unique: [true, 'book with this title already exists'],
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    price: {
        type: Number,
        required: [true, 'price is required field']
    },
    tags: {
        type: [String],
        required: true,
        enum: ['web', 'html', 'java', 'javascript']
    },
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//create collection name Book and add schema
module.exports = mongoose.model('Book', bookSchema)
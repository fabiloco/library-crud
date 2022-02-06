const express = require('express');
const faker = require('@faker-js/faker');
const BookService = require('../services/book.service');

const router = express.Router();

const service = new BookService();

// Get all books
router.get('/', async (req, res) => {

	await service.find();

	res.json({
		books: 'book'
	});
});

// Get a book by id
router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		res.json({
			book_id: id,
		})
	} catch(error) {
		next(error);
	};
});


module.exports = router;

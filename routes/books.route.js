const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
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

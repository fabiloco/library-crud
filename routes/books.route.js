const express = require('express');

const validatorHandler = require('../middlewares/validator.handler');
const { getBookSchema, createBookSchema, updateBookSchema } = require('../schemas/book.schema');

const BookService = require('../services/book.service');

const router = express.Router();

const service = new BookService();

// Get all books
router.get('/',
	async (req, res, next) => {
		try {
			const books = await service.find();
			res.json(books);
		} catch(error) {
			next(error);
		};
	}
);

// Get a book by id
router.get('/:id',
	validatorHandler(getBookSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const book = await service.findOne(id);
			res.json(book);
		} catch(error) {
			next(error);
		};
	},
);

// Create a books
router.post('/',
	validatorHandler(createBookSchema, 'body'),
	async (req, res, next) => {
		try {
			const { body } = req;
			const newBook = await service.create(body);
			res.json(newBook);
		}catch(error) {
			next(error);
		};
	},
);

// Update a book
router.patch('/:id',
	validatorHandler(getBookSchema, 'params'),
	validatorHandler(updateBookSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const updatedBook = await service.update(id, body);
			res.json(updatedBook);
		}catch(error) {
			next(error);
		};
	},
);

// Delete a book
router.delete('/:id',
	validatorHandler(getBookSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			await service.delete(id);
			res.status(201).json({ id });
		}catch(error) {
			next(error);
		};
	},
);

module.exports = router;

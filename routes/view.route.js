const express = require('express');
const multer  = require('multer');

const validatorHandler = require('../middlewares/validator.handler');
const { getBookSchema, createBookSchema, updateBookSchema } = require('../schemas/book.schema');

const BookService = require('../services/book.service');

const router = express.Router();

const service = new BookService();


// configuración de multer
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'uploads');
	},
	filename: function(req, file, cb)  {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

const upload = multer({ storage: storage });

// Este enrutador será usado solo por la interfaz, para servir los datos de manera dinamica

// Renderizar página de lista de libros
router.get('/',
	async (req, res, next) => {
		try {
			const books = await service.find();
			res.render('list-book', { books: books });
		} catch(error) {
			next(error);
		};
	}
);

// Ruta para renderizar la página de nuevo libro
router.get('/new-book', (req, res, next) => {
		res.render('new-book');
	},
);

// Ruta para crear un nuevo libro
router.post('/create-new-book',
	upload.single('image'),
	validatorHandler(createBookSchema, 'body'),
	async (req, res, next) => {
		try {
			const { body } = req;
			if(req.file) body.image = req.file.path;
			const newBook = await service.create(body);
			res.redirect('/');
		}catch(error) {
			next(error);
		};
	},
);

// Ruta para renderizar la página de ver libro
router.get('/view-book/:id',
	validatorHandler(getBookSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const book = await service.findOne(id);
			res.render('view-book', { book: book });
		} catch(error) {
			next(error);
		};
	},
);

// Ruta para renderizar la página de editar libro
router.get('/edit-book/:id',
	validatorHandler(getBookSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const book = await service.findOne(id);
			res.render('edit-book', { book: book });
		} catch(error) {
			next(error);
		};
	},
);

// Ruta para crear un nuevo libro
router.post('/update-book/:id',
	validatorHandler(getBookSchema, 'params'),
	validatorHandler(updateBookSchema, 'body'),
	upload.single('image'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			if(req.file) body.image = req.file.path;
			const updatedBook = await service.update(id, body);
			res.redirect('/');
		}catch(error) {
			next(error);
		};
	},
);

// Delete a book
router.get('/delete/:id',
	validatorHandler(getBookSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			await service.delete(id);
			res.redirect('/');
		}catch(error) {
			next(error);
		};
	},
);

module.exports = router;

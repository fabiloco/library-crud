const boom = require('@hapi/boom');
const { models } = require('../libs/sequilize');

class BookService {
	constructor() {
		this.booksModel = models.Book;
	};

	async create(data) {
		const newBook = await this.booksModel.create(data);
		return newBook.toJSON();
	};

	async find() {
		const books = await this.booksModel.findAll();
		return books;
	};

	async findOne(id) {
		const book = await this.booksModel.findByPk(id);
		if(!book) {
			throw boom.notFound('book not found');
		}
		return book;
	};

	async update(id, changes) {
		const oldBook = await this.findOne(id);
		const newBook = await oldBook.update(changes);
		return newBook;
	};

	async delete(id) {
		const book = await this.findOne(id);
		await book.destroy();
		return { id, };
	};
};

module.exports = BookService;

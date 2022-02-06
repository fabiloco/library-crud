const { models } = require('../libs/sequilize');

class BookService {
	constructor() { };

	create() {

	};

	async find() {
		const response = await models.Book.findAll();
		console.log(response);
	};

	findOne() {

	};

	update() {

	};

	delete() {

	};
};

module.exports = BookService;

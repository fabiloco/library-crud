const { getConnection } = require('../libs/mysql');

class BookService {
	constructor() {
		this.pool = getConnection();
	};

	create() {

	};

	async find() {
		const query = 'SELECT * FROM books;'
		const response = await this.pool.query(query);
		console.log(response[0]);
	};

	findOne() {

	};

	update() {

	};

	delete() {

	};
};

module.exports = BookService;

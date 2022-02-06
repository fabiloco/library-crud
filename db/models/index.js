const { Book, BookSchema } = require('./book.model');

const setupModels = (sequilize) => {
	Book.init(BookSchema, Book.config(sequilize));
};

module.exports = { setupModels };

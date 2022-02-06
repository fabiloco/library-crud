const Joi = require('joi');

const id = Joi.number().integer();

const name = Joi.string()
	.min(3)
	.max(50);

const description = Joi.string();

const author = Joi.string()
	.min(3)
	.max(50);

const price = Joi.number()
	.positive();

const pageNum = Joi.number().integer()
	.positive();

const createBookSchema = Joi.object({
	name: name.required(),
	description: description.required(),
	author: author.required(),
	price: price.required(),
	pageNum: pageNum.required(),
});

const updateBookSchema = Joi.object({
	name: name,
	description: description,
	author: author,
	price: price,
	pageNum: pageNum,
});

const getBookSchema = Joi.object({
	id: id.required(),
});

module.exports = {
	createBookSchema,
	updateBookSchema,
	getBookSchema,
};

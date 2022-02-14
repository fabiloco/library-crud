const { Model, DataTypes, Sequelize } = require('sequelize');

const BOOK_TABLE = 'books';

const BookSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},

	name: {
		allowNull: false,
		type: DataTypes.STRING(50),
	},

	description: {
		allowNull: false,
		type: DataTypes.TEXT,
		defaultValue: 'Sin descripcion',
	},

	price: {
		allowNull: true,
		type: DataTypes.FLOAT.UNSIGNED,
	},

	author: {
		allowNull: false,
		type: DataTypes.STRING(50),
	},

	pageNum: {
		allowNull: false,
		field: 'page_num',
		type: DataTypes.INTEGER,
	},

	image: {
		allowNull: true,
		field: 'image',
		type: DataTypes.STRING(250),
		defaultValue: 'uploads/noimage.jpg',
	},

	createdAt: {
		allowNull: true,
		field: 'created_at',
		defaultValue: Sequelize.NOW,
		type: DataTypes.DATE,
	},

};

class Book extends Model {
	static associate() {
		// associate
	};

	static config(sequelize) {
		return {
			sequelize,
			tableName: BOOK_TABLE,
			modelName: 'Book',
			timestamps: false,
		};
	};
};

module.exports = {
	BOOK_TABLE,
	BookSchema,
	Book,
};

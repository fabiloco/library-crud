const express = require('express');

const booksRoute = require('./books.route');

const routerApi = (app) => {
	const router = express.Router();
	app.use('/api/v1', router);
	router.use('/books', booksRoute);
};

const viewRoute = require('./view.route');

const routerViews = (app) => {
	const router = express.Router();
	app.use('/', router);
	router.use('/', viewRoute);
};

module.exports = { routerApi, routerViews };

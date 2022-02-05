const express = require('express');

const booksRoute= require('./books.route');


const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', booksRoute);
}

module.exports = routerApi;

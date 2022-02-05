const express = require('express');

const routesApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

// Configuraciones

const app = express();
const port = 3000;

app.use(express.json());

// Routes
routesApi(app);

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/', (req, res) => {
	res.send('<h1>Hola mi server de express</h1>');
});

app.listen(port, () => {
	console.log(`Server listening in http://localhost:${port}`);
});

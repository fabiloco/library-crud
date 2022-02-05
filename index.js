const express = require('express');

const routesApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const cors = require('cors');

// Configuraciones
const app = express();
const port = 3000;

// Access whitelist
const whitelist = ['http://localhost:3001'];

// CORS options
const options = {
	origin: (origin, callback) => {
		if(whitelist.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('No permitido'));
		}
	},
};

app.use(express.json());
app.use(cors(options));

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

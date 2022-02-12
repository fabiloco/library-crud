const express = require('express');

const { routerApi, routerViews } = require('./routes');

const {
	logErrors,
	errorHandler,
	boomErrorHandler,
	ormErrorHandler,
} = require('./middlewares/error.handler');

const cors = require('cors');
const BookService = require('./services/book.service');

// Configuraciones
const app = express();
const port = 3000;

// Access whitelist
const whitelist = ['http://localhost:3000'];

// CORS options
const options = {
	origin: (origin, callback) => {
		if (whitelist.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('No permitido'));
		}
	},
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors(options));
app.use(cors());

// app.use(express.static(__dirname + '/public'));

// Configurando el motor de plantillas
app.set('views', './views')
app.set('view engine', 'ejs');

// Routes
routerApi(app);
routerViews(app);

// Middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server listening in http://localhost:${port}`);
});

const Express = require('express');

const app = Express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('<h1>Hola mi server de express</h1>');
});

app.listen(port, () => {
	console.log(`Server listening in http://localhost:${port}`);
});

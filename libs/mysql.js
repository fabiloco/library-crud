const mysql = require('mysql2/promise');

const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const getConnection = () => {
	const pool = mysql.createPool({
		uri: URI,
	});

	return pool;
};

module.exports = { getConnection };

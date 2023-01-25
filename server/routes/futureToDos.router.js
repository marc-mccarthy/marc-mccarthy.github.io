const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
	pool
		.query('SELECT * FROM "futureToDos"')
		.then((response) => {
			res.send(response.rows);
		})
		.catch((err) => {
			console.log("getFutureToDos server failed: ", err);
			res.sendStatus(500);
		});
});

module.exports = router;

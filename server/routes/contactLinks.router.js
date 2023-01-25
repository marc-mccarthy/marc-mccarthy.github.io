const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
	pool
		.query('SELECT * FROM "contactLinks"')
		.then((response) => {
			res.send(response.rows);
		})
		.catch((err) => {
			console.log("getContactLinks server failed: ", err);
			res.sendStatus(500);
		});
});

module.exports = router;

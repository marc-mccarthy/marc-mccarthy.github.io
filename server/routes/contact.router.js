const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const sendGrid = require("../modules/sendGrid");

router.post("/", (req, res) => {
	pool
		.query(
			`INSERT INTO "contact" ("first_name", "last_name", "email", "message") VALUES ($1, $2, $3, $4);`,
			[req.body.firstName, req.body.lastName, req.body.email, req.body.message]
		)
		.then(() => {
			sendGrid(req.body);
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log("Form submission failed: ", err);
			res.sendStatus(500);
		});
});

module.exports = router;

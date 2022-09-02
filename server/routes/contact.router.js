const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// require sendgrid api logic
const sendGrid = require('../modules/sendGrid');

// add new report
router.post('/', (req, res) => {
  // post query adding our form data for new contact
  pool
    .query(
      `INSERT INTO "contact" ("first_name", "last_name", "email", "message") VALUES ($1, $2, $3, $4);`,
      [
        req.body.firstName, // $1
        req.body.lastName, // $2
        req.body.email, // $3
        req.body.message, // $4
      ]
    )
    .then(() => {
      // sendgrid api function
      sendGrid(req.body);
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('Form submission failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

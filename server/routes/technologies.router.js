const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all technologies
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "technologies"')
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log('getTechnologies server failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

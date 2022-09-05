const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all services
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "services"')
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log('getServices server failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

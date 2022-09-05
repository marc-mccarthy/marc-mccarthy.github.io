const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all interests
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "interests"')
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log('getInterests server failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

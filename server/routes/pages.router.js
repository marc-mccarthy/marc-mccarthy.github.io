const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all pages
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "pages"')
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log('getPages server failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

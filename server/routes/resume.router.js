const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all resume
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "resume"')
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log('getResume server failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

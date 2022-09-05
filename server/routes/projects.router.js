const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all projects
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "projects"')
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log('getProjects server failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

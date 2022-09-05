const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get all videos
router.get('/', (req, res) => {
  pool
    .query('SELECT * FROM "videos"')
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log('getVideos server failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

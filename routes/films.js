const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/filmsController');

// Routes pour /films
router.get('/', ctrl.getFilms);
router.post('/', ctrl.addFilm);
router.delete('/:id', ctrl.deleteFilm);

module.exports = router;

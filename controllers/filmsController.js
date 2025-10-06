const db = require('../db');

// Récupérer tous les films via GET /films
async function getFilms(req, res) {
  try {
    const [rows] = await db.query('SELECT id, title, year FROM films ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

// Ajouter un film via POST /films
async function addFilm(req, res) {
  try {
    const { title, year } = req.body;
    if (!title || !year) return res.status(400).json({ error: 'title et year requis' });
    const [result] = await db.query('INSERT INTO films (title, year) VALUES (?, ?)', [title, year]);
    const insertedId = result.insertId;
    const [rows] = await db.query('SELECT id, title, year FROM films WHERE id = ?', [insertedId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

// Supprimer un film via DELETE /films/:id
async function deleteFilm(req, res) {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM films WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Film non trouvé' });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

module.exports = { getFilms, addFilm, deleteFilm };

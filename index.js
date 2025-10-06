const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

// Import des routes.
const filmsRouter = require('./routes/films');

// Initialisation de l'application Express.
const app = express();
app.use(cors());
app.use(express.json());

// Utilisation des routes.
app.use('/api/films', filmsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

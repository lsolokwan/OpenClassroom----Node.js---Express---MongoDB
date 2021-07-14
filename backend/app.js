const express = require('express');

const app = express();

// Réponse simple pour éviter 404 et vérifier bon fonctionnement
app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

module.exports = app;
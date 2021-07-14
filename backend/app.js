const express = require('express');

const app = express();

// Premiers middlewares
// req = request , res = response , next ( permet au middleware de paser l'éxecution au middleware suivant)
app.use((req, res, next ) => {
    console.log('Requête recue');
    // Renvoie prochain middleware
    next();
});

app.use((req, res, next ) => {
    // Modification du code de la requête
    res.status(201);
    // Renvoie prochain middleware
    next();
});

app.use((req, res, next) => {
    // Envoie Réponse simple
   res.json({ message: 'Votre requête a bien été reçue !' }); 
   next();
});

// Dernier middleware  ( écrit dans la console ) pas besoin next
app.use((req, res ) => {
    console.log('Reponse envoyée dans précédent middleware ( ne peut plus être modif )');
});
module.exports = app;
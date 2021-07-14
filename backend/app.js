const express = require('express');

const app = express();
// Ajout middleware générale pour gérer CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // accéder à notre API depuis n'importe quelle origine ( '*' ) 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
    next();
  });

// Middleware partie 1
// ajout argument /api/stuff = url visée par l'application : endpoint : route
// Dedans crée deux objets
app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900, // en centime pour eviter les virgules au maximum
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];

    // attribue code 200  à la reponse est renvoie en json stuff en réponse
    res.status(200).json(stuff);
  });
module.exports = app;
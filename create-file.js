const fs = require('fs');

// Contenu que l'on veut mettre dans le fichier
const contenu = "Hello Node";

// Création du fichier 'welcome.txt'
fs.writeFile('welcome.txt', contenu, (err) => {
  if (err) {
    console.error("Erreur lors de la création du fichier :", err);
    return;
  }
  console.log("Le fichier 'welcome.txt' a été créé avec succès !");
});

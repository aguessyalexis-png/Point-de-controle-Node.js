const fs = require('fs');

// Lecture du fichier 'hello.txt' avec l'encodage 'utf8' pour avoir du texte lisible
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Impossible de lire le fichier. Vérifiez qu'il existe bien.");
    return;
  }
  // Affiche le contenu du fichier dans la console
  console.log(data);
});


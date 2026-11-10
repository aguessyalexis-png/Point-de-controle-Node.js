// Importation du module que vous venez d'installer
const generator = require('generate-password');

// Génération d'un mot de passe avec des options personnalisées
const password = generator.generate({
	length: 12,        // Longueur du mot de passe (12 caractères)
	numbers: true,     // Inclure des chiffres
	symbols: true,     // Inclure des symboles (!, @, #, etc.)
	uppercase: true,   // Inclure des majuscules
	lowercase: true    // Inclure des minuscules
});

// Affichage du mot de passe généré dans la console
console.log(`Votre mot de passe sécurisé : ${password}`);

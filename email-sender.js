const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // <-- peut être outlook ou autres
  auth: {
    user: 'xyz@gmail.com', // <-- Votre email
    pass: 'xxxxxxxxxxx'     // <-- Votre mot de passe
  }
});

const mailOptions = {
  from: 'xyzi@gmail.com',
  to: 'fcdf@example.com', // <-- email du destinataire
  subject: 'Test final Node.js',
  text: 'Si ce message s\'affiche, c\'est que ça fonctionne enfin !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    
    console.error('Erreur :', error);
  } 
  
  else {
    console.log('E-mail envoyé avec succès ! Réponse : ' + info.response);
  }
});

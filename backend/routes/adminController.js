const router = require("express").Router();
let admin = require("../models/SchemaAdmin");
const passwordHash = require("password-hash");

router.route("/signup").post((req, res) => {
  console.log(req.body);
  if (!req.body.pseudo || !req.body.mot_de_passe) {
    res.status(400).json({
      text: "Requête invalide"
    });
  } else {
    let user = {
      pseudo: req.body.pseudo,
      mot_de_passe: passwordHash.generate(req.body.mot_de_passe)
    };
        let _u = new admin(user);
        _u.save(function(err, admin) {
          if (err) {
          	console.log(err);
            res.status(500).json({
              text: "Erreur interne1"
            });
          } else {
            res.status(200).json({
              text: "Succès",
              token: admin.getToken()
            });
          }
        }
        );
    }
});

router.route("/login").post((req, res) => {
  if (!req.body.pseudo || !req.body.mot_de_passe) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    res.status(400).json({
      text: "Requête invalide"
    });
  } else {
    admin.findOne(
      {
        pseudo: req.body.pseudo,
      },
      function(err, admin) {
        if (err) {
          res.status(500).json({
            text: "Erreur interne"
          });
        } else if (!admin) {
          res.status(401).json({
            text: "L'utilisateur n'existe pas"
          });
        } else {
        	if(admin.authenticate(req.body.mot_de_passe)) {
            res.status(200).json({
              token: admin.getToken(),
              text: "Authentification réussi"
            });
        } else {
            res.status(401).json({
              text: "Mot de passe incorrect"
            });
          }

          }
      }
    );
  }
});

module.exports = router;
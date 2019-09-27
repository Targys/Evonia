const router = require("express").Router();
let historique = require("../models/SchemaHistorique");

router.route('/').get((req, res) => {
	historique.find()
	  .then(historiques => res.json(historiques))
	  .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
	const titre = req.body.titre;
	const description = req.body.description;

	const newHistorique = new historique({
		titre,
		description,
	});

	newHistorique.save()
	.then(() => res.json('Historique ajouté!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	historique.findById(req.params.id)
	  .then(historique => res.json(historique))
	  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	historique.findByIdAndDelete(req.params.id)
	  .then(() => res.json('Historique supprimé.'))
	  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
	historique.findById(req.params.id)
	  .then(historique => {
	  	historique.titre = req.body.titre;
	  	historique.description = req.body.description;

	  	historique.save()
	  	  .then(() => res.json('Historique mis à jour!'))
	  	  .catch(err => res.status(400).json('Error: ' + err));
	  })
	  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
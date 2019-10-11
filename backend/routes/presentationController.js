const router = require("express").Router();
let presentation = require("../models/SchemaPresentation");

router.route('/add').post((req, res) => {
	const description = req.body.description;

	const newPresentation = new presentation({
		description
	});

	newPresentation.save()
	.then(() => res.json('Présentation ajouté!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/afficher').get((req, res) => {
	presentation.find()
	  .then(presentation => res.json(presentation))
	  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update').post((req, res) => {
	presentation.findByIdAndUpdate("5d822fffbc760d3fe9d6ad79",{description: req.body.description})
		.then(() => res.json('Presentation mise à jour!'))
	  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
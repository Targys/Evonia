const router = require("express").Router();
let video = require("../models/SchemaVideo");

router.route('/').get((req, res) => {
	video.find()
	  .then(videos => res.json(videos))
	  .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
	const titre = req.body.titre;
	const url = req.body.url;

	const newVideo = new video({
		titre,
		url,
	});

	newVideo.save()
	.then(() => res.json('Vidéo ajoutée!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	video.findById(req.params.id)
	  .then(video => res.json(video))
	  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	video.findByIdAndDelete(req.params.id)
	  .then(() => res.json('Vidéo supprimée.'))
	  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
	video.findById(req.params.id)
	  .then(video => {
	  	video.titre = req.body.titre;
	  	video.url = req.body.url;

	  	video.save()
	  	  .then(() => res.json('Vidéo mise à jour!'))
	  	  .catch(err => res.status(400).json('Error: ' + err));
	  })
	  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
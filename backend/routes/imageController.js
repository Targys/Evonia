const router = require("express").Router();
const multer = require("multer");
let image = require("../models/SchemaImage");

const DIR = "../public/images";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.route('/').get((req, res) => {
	image.find()
	  .then(images => res.json(images))
	  .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/upload').post(upload.single('img'), (req, res) => {
	const titre = req.body.titre;

	const newImage = new image({
		titre,
		img: '/images/' + req.file.filename
	});

	newImage.save()
	.then(() => res.json(req.body.img))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	image.findById(req.params.id)
	  .then(image => res.json(image))
	  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	image.findByIdAndDelete(req.params.id)
	  .then(() => res.json('Image supprimée.'))
	  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
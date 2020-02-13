const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path: '.env.local'});

const uri = process.env.URI;
const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(require('prerender-node').set('prerenderServiceUrl','http://localhost:3000/').set('prerenderToken', 'hOYKP0Da3SG3ydo7wwzT'));

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
});

const adminRouter = require('./routes/adminController');
const presentationRouter = require('./routes/presentationController');
const historiqueRouter = require('./routes/historiqueController');
const videoRouter = require('./routes/videoController');
const imageRouter = require('./routes/imageController');

app.use("/admin", adminRouter);
app.use("/dashboard/modifier_presentation", presentationRouter);
app.use("/dashboard/ajout_historique", historiqueRouter);
app.use("/dashboard/ajout_videos", videoRouter);
app.use("/dashboard/ajout_photos", imageRouter);

app.listen(port, ()=>{
	console.log(`Server is running on port: ${port}`);
});
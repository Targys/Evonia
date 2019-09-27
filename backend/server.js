const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path: '.env.local'});

const uri = process.env.URI;
const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
});

const adminRouter = require('./routes/adminController');
const presentationRouter = require('./routes/presentationController');
const historiqueRouter = require('./routes/historiqueController');

app.use("/admin", adminRouter);
app.use("/dashboard/modifier_presentation", presentationRouter);
app.use("/dashboard/ajout_historique", historiqueRouter);

app.listen(port, ()=>{
	console.log(`Server is running on port: ${port}`);
});
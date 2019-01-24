const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance =>
	app.set('db', dbInstance)
);



app.use(bodyParser.json());
app.use(cors());


// dbInstance
// 	.get_planes()
// 	.then(planes => console.log(err))
// 	.catch(err => console.log(err));

app.get('/api/planes', controller.getPlanes)

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

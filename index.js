const express = require('express');
const app = express();

const db = require('./db');
const port = '3000';

const baseURL = '/api/v1/pois';
const router = express.Router();

app.use('/html', express.static('public')); //check
//app.use(express.json());
router.use(express.json());

app.get('/api/v1/pois', (request, response) => {
    const pois = db.getPoi();
    response.send(pois);
});

app.get('/api/v1/pois/:id', (request, response) => {
    const id = request.params.id;
    const poi = db.getPoi(id);
    if (poi){
        response.send(poi);
    } else {
        response.status(404).send();
    }
});

app.post('/api/v1/pois', (request, response) => {
    let poi = request.body;
    //console.log(poi);
    if (poi.name && poi.description && poi.city && poi.coordinates && poi.coordinates.lat && poi.coordinates.lng) {
        poi = db.createPoi(poi);
        response.status(201).send(poi);
    } else {
        response.status(400).send();
    }
    //poi = db.createPoi(poi);
    //response.send(poi);
    //response.status(201).send(poi);
})


router.delete('/pois/:id', (request, response) => {
    const id = request.params.id;

    if(id && db.getPoi(id)) {
        db.deletePoi(id);
        response.status(204).send();
    } else {
        response.status(404).send();
    }
});

app.use(baseURL, router);
app.listen(port, () => {
    console.log('Server lisnening on port ' + port);
});

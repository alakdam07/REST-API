const uuid = require('uuid/v1');

const storage = {
    'e62a37e0-7864-11e9-9e75-e5ec65767070': {
        id: 'e62a37e0-7864-11e9-9e75-e5ec65767070',
        name: 'Business College Helsinki',
        description: 'Business College Helsinki has long experience and a good reputation as an expert and developer of high quality vocational education. As a forward-looking training provider, we offer our students versatile learning environments, individual career paths, and various skills for developing personal and professional skills. In addition to teaching, we focus on our good connections with working life.',
        city: 'Helsinki',
        coordinates: {
            lat: 60.2018773,
            lng: 24.9353841
        }
    }
}

function getPoi(id) {
    if (id) {
        return storage[id];
    } else {
        return Object.values(storage);
    }
}

function setPoi(id, poi) {
    storage[id] = { id, ...poi };
    return storage[id];
}

function createPoi(poi) {
    const id = uuid();
    return setPoi(id, poi);
}

function deletePoi(id) {
    if (id) {
        delete storage[id];
        return true;
    } else {
        return;
    }
}

module.exports = {
    getPoi,
    setPoi,
    createPoi,
    deletePoi
}

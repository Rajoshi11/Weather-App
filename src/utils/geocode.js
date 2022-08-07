const request = require('postman-request');

// Using shorthand property of object
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9ubml0MzAxMiIsImEiOiJja3dqZ2VraHoxMmZ2MnRtZHhydDdtaHZiIn0.rw_ST19gG_YwOwxbRfhtzw&limit=1';

    request({url, json: true}, (error, { body }) => {        // 'url: url' can be changed to 'url' and response object can be destructured to body property
        if(error) {
            callback('Unable to connect to location services!', undefined);    // if we dont put second parameter javascript automatically considers the second parameter as undefined like callback('Unable to connect to location services!');
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geoCode;
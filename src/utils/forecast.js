const request = require('postman-request');

// Using shorthand property of objects

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cbb83db605e31c154ef5174511780320&query=' + latitude + ',' + longitude + '&units=m';

    request({url, json: true}, (error, {body}) => {      // 'url: url' can be changed to 'url' and response object can be destructured to body property
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`);
        }
    })
}

module.exports = forecast;
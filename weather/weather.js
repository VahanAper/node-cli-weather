const request = require('request');

const { KEY } = require('./key');

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`,
    json: true,
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      })
    } else {
      callback('Unable to fetch wehater.');
    }
  });
};

module.exports.getWeather = getWeather;

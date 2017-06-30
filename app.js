const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelpia',
  json: true,
}, (error, response, body) => {
  const { results: { 0: result } } = body;
  console.log(`Adress: ${result.formatted_address}`);
  console.log(`Latitude: ${result.geometry.location.lat}`);
  console.log(`Longitude: ${result.geometry.location.lng}`);
});

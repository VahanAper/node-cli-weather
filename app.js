const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    address: {
      demand: true,
      describe: 'Address to fetch wehater for.',
      alias: 'a',
      string: true,
    },
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true,
}, (error, response, body) => {
  const { results: { 0: result } } = body;

  console.log(`Adress: ${result.formatted_address}`);
  console.log(`Latitude: ${result.geometry.location.lat}`);
  console.log(`Longitude: ${result.geometry.location.lng}`);
});

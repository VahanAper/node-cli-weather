const yargs = require('yargs');

const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});

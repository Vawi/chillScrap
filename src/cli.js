// Cli helper 
const meow = require('meow');
const chillsc = require('./scrap');
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

module.exports.handleCli = function () {
	const cli = meow(`
	Usage
	  $ chillscrap <input>

	Options
      --saison, -s  Include a saison. use actual saison by default
      --year, -s Include a year. Use last year by default
      --tracklist, -t log all the track list for the saison and year specified
      --music, -m listen music or not 

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
	`, {
		flags: {
			saison: {
				type: 'string',
				alias: 's'
			},
			year: {
				type: 'number',
				alias: 'y'
			},
			tracklist: {
				type: 'boolean',
				alias: 't'
			},
			music: {
				type: 'boolean',
				alias: 'm'
			}
		}
	});

	for(let i = 0; i < cli.input.length; i++) {
		console.log(cli.input[i]);
	}

	console.log(cli.flags);
	console.log(cli.help);

	if(cli.flags.tracklist === true) {
		chillsc.tracklist();
	}
	
	rl.question("What is your name ? ", function(name) {
		rl.question("Where do you live ? ", function(country) {
			console.log(`${name}, is a citizen of ${country}`);
			rl.close();
		});
	}); 


	rl.on("close", async function() {
		await chillsc.quit();
		process.exit(0);
	});
}
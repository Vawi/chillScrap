// Cli helper 
const meow = require('meow');
const chillsc = require('./scrap');
const readline = require("readline");
const uri = require("./createURI");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let date = new Date();

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
	  $ chillscrap --saison=summer -y=2020 -t -m 
	  get the tracklist and run music for Chillhop Essentials Summer 2020 (if exist)
	  🌈 lister Chillhop Record Summer 2020 🌈
	`, {
		flags: {
			saison: {
				type: 'string',
				default: 'summer',
				alias: 's'
			},
			year: {
				type: 'number',
				default: date.getFullYear() - 1,
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

	let url = uri.createURI(cli.flags.saison, cli.flags.year);
	if(cli.flags.tracklist) {
		chillsc.tracklist(url);
	}
	if(cli.flags.music) {
		chillsc.scrap()
	}
	
	while(true) {
		rl.question("What do you want ? -h or --help to see helper", function(cmds) {
			console.log(`THATS A LOT OF CMDS : ${cmds}`);
			rl.close();
			// ADD next step, parse cmds
		});
	}


	rl.on("close", async function() {
		await chillsc.quit();
		process.exit(0);
	});
}
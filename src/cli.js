// Cli helper 
const meow = require('meow');
const chillsc = require('./scrap');
const uri = require("./createURI");
const chalk = require('chalk');
const album = require('./albumHelper');
const inqHelp = require('./inquiererHelper');

let date = new Date();

module.exports.handleCli = function () {
	const cli = meow( helper
	, {
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
			},
			default: {
				type: 'boolean',
				alias: 'd'
			}
		}
	});

	let url = uri.createURI(cli.flags.saison, cli.flags.year, cli.flags.default);
	if(cli.flags.tracklist) {
		chillsc.tracklist(url);
	}
	if(cli.flags.music) {
		chillsc.scrap()
	}

	inqHelp.basicStep();
	
	if(cli.flags.default) {
		chillsc.getNewStuff();

		chillsc.getCurrentUrl().then(url => console.log(url));
	}

}

const helper = (
	chalk.red("Usage\n") + 
	`$ chillscrap <input>\n\n` + 

	chalk.blue("Options \n") + 
	`--saison, -s  Include a saison. use actual saison by default
      --year, -s Include a year. Use last year by default
	  --tracklist, -t log all the track list for the saison and year specified
	  --default, -d go to the main bandcamp page
	  --music, -m listen music or not \n\n` +

	chalk.green("Exemple \n") +
	`$ chillscrap --saison=summer -y=2020 -t -m 
	  get the tracklist and run music for Chillhop Essentials Summer 2020 (if exist)
	  🌈 lister Chillhop Record Summer 2020 🌈`
)
// Cli helper 
const meow = require('meow');
const chillsc = require('../scrap');
const uri = require("../createURI");
const helper = require('./helper');

let date = new Date();

module.exports.handleCli = function () {
	const cli = meow( helper.helper
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
			chill: {
				type: 'boolean',
				alias: 'c'
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
	if(cli.flags.chill) {
		chillsc.startMusic(url)
	}
	
	if(cli.flags.default) {
		chillsc.getNewStuff();
	}
}
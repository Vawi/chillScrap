const chalk = require('chalk');

module.exports.helper = (
	chalk.red("Usage\n") + 
	`$ chillscrap <input>\n\n
	` + 

	chalk.blue("Options \n") + 
	` 
	  --saison, -s  Include a saison. use actual saison by default
        --year, -s Include a year. Use last year by default
	  --tracklist, -t log all the track list for the saison and year specified
	  --default, -d go to the main bandcamp page
	  --music, -m listen music or not \n\n
	` +

	chalk.green("Exemple \n") +
	` 
	  $ chillscrap --saison=summer -y=2020 -t -m 
	  get the tracklist and run music for Chillhop Essentials Summer 2020 (if exist)
	  🌈 lister Chillhop Record Summer 2020 🌈\n\n
	`
);
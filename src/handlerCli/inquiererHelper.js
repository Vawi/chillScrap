const inquirer = require('inquirer');
const helper = require('./cmds/helper');
const scrap = require('../scrap');

module.exports.basicStep = function() {
	inquirer
		.prompt([
			{
			type: 'list',
			name: 'whatNext',
			message: 'What do you want to do ?',
			choices: [
				'Help', 'Albums', 'Chill', 'Pause', 'KILL', 'NewAndDefault',
			    ],
			},
		])
		.then(async answers => {
			switch (answers.whatNext) {
				case 'Help':
				  console.log(helper.helper);
				  break;
				case 'Albums':
					break;
				case 'Chill':
					break;
				case 'Pause':
					await scrap.pauseMusic();
					break;
				case 'KILL':
					await scrap.quit();
					break;
				case 'NewAndDefault':
					break;
				default:
				  console.log(`Sorry, we don't handle that cmds, try again`);
			}
			this.basicStep()
		});
}

function whatAlbumToPlay() {

}

function SelectYearSaison() {
	
}


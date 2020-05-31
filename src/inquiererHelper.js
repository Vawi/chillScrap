const inquirer = require('inquirer');

module.exports.basicStep = function() {
	inquirer
		.prompt([
			{
			type: 'checkbox',
			name: 'Next step',
			message: 'What do you want to do ? :)',
			choices: [
				'Help', 'Albums', 'Play Chill ?', 'Pause music ?', 'KILL THE PROCESS', 'Check new Thing on default page ?',
			    ],
			},
		])
		.then(answers => {
			console.info('Answer:', answers);
		});
}

module.exports.WhatAlbumToPlay = function() {

}
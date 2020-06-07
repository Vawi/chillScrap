const inquirer = require('inquirer');

const helper = require('./helper');
const scrap = require('../scrap');
const uriHelper = require('../createURI');
const proc = require('../processHandler');
const albumHelper = require('../helper/albumHelper');

module.exports.basicStep = function() {
	inquirer
		.prompt([
			{
			type: 'list',
			name: 'whatNext',
			message: 'What do you want to do ?',
			choices: [
				'Help', 'Albums', 'Artiste', 'Chill', 'Pause', 'login', 'KILL', 'NewAndDefault',
			    ],
			},
		])
		.then(async answers => {
			switch (answers.whatNext) {
				case 'Help':
				  console.log(helper.helper);
				  break;
				case 'Albums':
					await displayAllAlbum();
					break;
				case 'Artiste':
					displayAllAlbumFromArtiste();
					break;
				case 'Chill':
					await playChill();
					break;
				case 'Pause':
					await scrap.pauseMusic();
					break;
				case 'login':
					await scrap.login();
					break; 
				case 'KILL':
					await scrap.quit();
					break;
				case 'NewAndDefault':
					break;
				default:
				  console.log(`Sorry, we don't handle that cmds, try again`);
			}
			this.basicStep();
		});
	proc.sigint();
}

async function playChill() {
	let sy = await selectSaisonYearToPlay();
	let uri = uriHelper.createURI(sy.saison, sy.year, false);
	console.log(uri);
	scrap.startMusic(uri);
}

async function selectSaisonYearToPlay() {
	let saison = await inquirer
		.prompt([
			{
			type: 'list',
			name: 'saison',
			message: 'What saison and year do you want ?',
			choices: [
				'fall', 'winter', 
				'summer', 'spring',
			],
		}]);
	
	let year = await inquirer
		.prompt([
			{
			type: 'input',
			name: 'year',
			default: '2019',
			message: 'What year do you want ?',
			},
		]);

	return { ...saison, ...year};
}

function getWhatNew() {
	scrap.getNewStuff();
}

function displayAllArtiste() {
	console.log(displayAllArtiste);
}

async function displayAllAlbum() {
	let album = await inquirer
		.prompt([
			{
			type: 'list',
			name: 'album',
			message: 'What album do you want to listen ?',
			choices: albumHelper.getAlbums(),
		}]);

	let url = albumHelper.getUriFromAlbum(album);

	console.log(url);
}

function displayAllAlbumFromArtiste(artiste) {
	console.log(albumHelper.getAlbumsByArtiste(artiste));
}


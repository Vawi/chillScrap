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
				'Help', 'Albums', 'Artiste', 'Chill', 'Pause', 'login', 'KILL', 'NewAndDefault', 'End the Capitalism',
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
					await displayAllArtiste();
					break;
				case 'Chill':
					await playChill();
					break;
				case 'Pause':
					await scrap.pauseMusic();
					break;
				case 'login':
					await computeLogin();
					break; 
				case 'KILL':
					await scrap.quit();
					break;
				case 'NewAndDefault':
					break;
				case 'End the Capitalism':
					BADABOOM();
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

async function displayAllArtiste() {
	let response = await inquirer
		.prompt([
			{
			type: 'list',
			name: 'artiste',
			message: 'What artiste do you want to listen ?',
			choices: albumHelper.getAllArtiste(),
		}]);

	await displayAllAlbumFromArtiste(response.artiste);
}

async function displayAllAlbumFromArtiste(artiste) {
	let response = await inquirer
		.prompt([
			{
			type: 'list',
			name: 'album',
			message: 'What artiste do you want to listen ?',
			choices: albumHelper.getAlbumsByArtiste(artiste),
		}]);

	let url = albumHelper.getUriFromAlbum(response.album);
	scrap.startMusic(url);
}

async function displayAllAlbum() {
	let response = await inquirer
		.prompt([
			{
			type: 'list',
			name: 'album',
			message: 'What album do you want to listen ?',
			choices: albumHelper.getAlbums(),
		}]);

	let url = albumHelper.getUriFromAlbum(response.album);
	scrap.startMusic(url);
}


function BADABOOM() {
	console.log("You win bitches <3");
}

async function computeLogin() {
	let pseudo = await inquirer
		.prompt([
			{
			type: 'input',
			name: 'pseudonyme',
			message: 'Enter pseudonyme',
			},
		]);

	let password = await inquirer 
		.prompt([
			{
			type: 'password',
			name: 'password',
			message: 'Enter password',
			},
		]);
		
	let isLog = await scrap.login(pseudo.pseudonyme, password.password)

	isLog ? console.log("You're log ! Congrat !") : console.log("Try again !");
}

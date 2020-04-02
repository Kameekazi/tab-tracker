//go to routes before here to set up route
//Used for declaring endpoints
const { Song } = require('../models')

module.exports = {
	async index (req, res) {
		try {
			const songs = await Song.findAll({ limit: 10 })
			res.send(songs)
		} catch (err) {
			res.status(500).send({
				error: 'an error has occured trying to fetch the songs'
			})
		}
	},
	async post (req, res) {
		try {
			const song = await Song.create(req.body)
			res.send(song)
		} catch (err) {
			res.status(500).send({
				error: 'an error has occured trying to create the song'
			})
		}
	},
	async show (req, res) {
		try {
			const song = await Song.findByPk(req.params.songId)
			res.send(song)
		} catch (err) {
			res.status(500).send({
				error: 'an error has occured trying to fetch a song'
			})
		}
	},
	async put (req, res) {
		try {
			const song = await Song.update(req.body, {
				where: {
					id: req.params.songId
				}
			})
			// console.log('song creds', song.toJSON())
			res.send(req.body)
		} catch (err) {
			res.status(500).send({
				error: 'an error has occured trying to update a song'
			})
		}
	}

}
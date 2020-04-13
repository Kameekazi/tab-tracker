// //go to routes before here to set up route
// //Used for declaring endpoints
// const { Bookmark } = require('../models')
// const { Op } = require('sequelize')

// module.exports = {
// 	async index (req, res) {
// 		try {
// 			let songs = null
// 			const { songId } = req.query
// 			if (search) {
// 				songs = await Song.findAll({
// 					where: {
// 						[Op.or]: [
// 							'title', 'artist', 'genre', 'album'
// 						].map(key => ({
// 							[key]: {
// 								[Op.like]: `%${search}%`
// 							}
// 						}))
// 					}
// 				})
// 			}
// 			else {
// 				songs = await Song.findAll({ limit: 10 })
// 			} res.send(songs)
// 		} catch (err) {
// 			res.status(500).send({
// 				error: 'an error has occured trying to fetch the songs'
// 			})
// 		}
// 	},
// 	async post (req, res) {
// 		try {
// 			const song = await Song.create(req.body)
// 			res.send(song)
// 		} catch (err) {
// 			res.status(500).send({
// 				error: 'an error has occured trying to create the song'
// 			})
// 		}
// 	}

// }
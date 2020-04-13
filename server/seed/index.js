const {
	sequelize,
	Song,
	User,
	Bookmark
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')

sequelize.sync({ force: true })
	.then(async function () {       //for dropping all tables in the database enable force note: testing purpose only
		await Promise.all(
			users.map(user => {
				console.log('sa user', user)
				User.create(user)
			})
		)

		await Promise.all(
			songs.map(song => {
				console.log('sa song', song)
				Song.create(song)
				console.log('done creating song')
			})
		).then(console.log('Done Creating songs'))

		// await Promise.all(
		// 	bookmarks.map(bookmark => {
		// 		console.log('sa bookmark', bookmark)
		// 		// Bookmark.create(bookmark)
		// 	})
		// )
	}).then(
		bookmarks.map(bookmark => {
			console.log('sa bookmark', bookmark)
			Bookmark.create(bookmark)
		})
	)
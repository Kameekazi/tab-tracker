module.exports = (sequelize, DataTypes) => {
	const Bookmark = sequelize.define('Bookmark', {})

	Bookmark.associate = function (models) {
		console.log('models sa bookmark', models)
		// console.log('models user', models.User)
		Bookmark.belongsTo(models.User)
		Bookmark.belongsTo(models.Song)

	}

	return Bookmark
}
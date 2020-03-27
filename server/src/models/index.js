const fs = require('fs') //nodejs way to include filesystem
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config.js')
const db = {}

console.log(`mao ning database ${config.db.database}`)

const sequelize = new Sequelize(  //initializing
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
    .readdirSync(__dirname)//getting all files from the model directory
    .filter((file) =>
        file !== 'index.js')
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file)) //storing all the model definitions of USER.js
        db[model.name] = model
    })

db.sequelize = sequelize //access to sequelize object
db.Sequelize = Sequelize //access to Sequelize object


module.exports = db
const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

function hashPassword (user) {
    const saltRounds = 8;

    if (!user.changed('password')) {
        return;
    }

    return bcrypt.hash(user.password, saltRounds).then((hash) => {
        console.log('hash sa function', hash)
        user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true            //only 1 instance should be registered else return error
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
            // beforeSave: hashPassword
        }
    })

    User.prototype.comparePassword = (password, hashpw) => {
        return bcrypt.compareSync(password, hashpw)
    }

    return User
}
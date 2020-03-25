module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true            //only 1 instance should be registered else return error
        },
        password: DataTypes.STRING
    });
};
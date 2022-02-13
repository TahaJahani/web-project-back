const { User } = require('../database/sequelize')

module.exports = function (ability) {
    return function (req, res, next) {
        if (req.user && req.user.abilities.includes(ability))
            next();
        else
            return res.status(403).json({
                status: 'error',
                message: 'شما دسترسی لازم به این بخش را ندارید',
            })
    }
}
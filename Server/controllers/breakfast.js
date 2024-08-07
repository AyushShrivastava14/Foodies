const { readData } = require('../database/db')

const getbreakfast = async (req, res) => {
    res.json(await readData('breakfast'));
}

module.exports = {getbreakfast};
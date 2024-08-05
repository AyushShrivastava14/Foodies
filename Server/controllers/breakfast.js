const {readData} = require('../database/db')

const getbreakfast = async (req, res) => {
    res.send(await readData('breakfast'));
}

module.exports = {getbreakfast};
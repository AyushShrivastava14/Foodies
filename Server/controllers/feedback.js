const {readData} = require('../database/db')

const getFeedback = async (req, res) => {
    res.json(await readData('feedback'));
}

module.exports = {getFeedback};
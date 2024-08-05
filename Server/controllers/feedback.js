const {readData} = require('../database/db')

const getFeedbacks = async (req, res) => {
    res.send(await readData('feedback'));
}

module.exports = {getFeedbacks};
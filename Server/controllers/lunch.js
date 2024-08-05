const {readData} = require('../database/db')

const getlunch = async (req, res) => {
    res.send(await readData('lunch'));
}

module.exports = {getlunch};
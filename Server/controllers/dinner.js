const {readData} = require('../database/db')

const getdinner = async (req, res) => {
    res.send(await readData('dinner'));
}

module.exports = {getdinner};
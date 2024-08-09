const { readData } = require('../database/db')

const getBreakfast = async (req, res) => {
    try {
        res.json(await readData('breakfast'));
    }
    catch(error) {
        console.log(`${error} in getBreakfast`);
    }
}

module.exports = {getBreakfast};
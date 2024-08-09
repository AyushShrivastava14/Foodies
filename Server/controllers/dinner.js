const {readData} = require('../database/db')

const getDinner = async (req, res) => {
    try {
        res.send(await readData('dinner'));
    }
    catch(error) {
        console.log(`${error} in getDinner`);
    }
}

module.exports = {getDinner};
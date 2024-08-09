const {readData} = require('../database/db')

const getLunch = async (req, res) => {
    try {
        res.send(await readData('lunch'));
    }
    catch(error) {
        console.log(`${error} in getLunch`);
    }
}

module.exports = {getLunch};
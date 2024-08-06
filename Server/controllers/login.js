// const { insert, remove, update} = require('../database/db');
const {check} = require('./signup');

const login = async(req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const username = data.email.toLowerCase().split('@')[0];

        // checking user credentials
        const signal = await check(data);
        
        if(signal === -1) {
            // res.status(200).send(`Welcome! ${username}`);
            console.log(`Welcome ${username}`);
        }
        else if(signal === 0){     // new user
            res.send('No User Found');
        }
        else res.status(400).send('Wrong password');      // wrong password
    }
    catch(error) {
        console.log(`${error} in login`);
    }
}

module.exports = { login };
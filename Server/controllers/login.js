// const { insert, remove, update} = require('../database/db');
const {check} = require('./signup');
const { generateToken } = require('../token/token')

const login = async(req, res) => {
    try {
        const data = req.body;
        console.log(data);

        const username = data.email.toLowerCase().split('@')[0];

        // checking user credentials
        const signal = await check(data);
        
        if(signal === -1) {
            // res.status(200).send(`Welcome! ${username}`);
            // console.log(`Welcome ${username}`);
            const token = await generateToken(data.email);
            res.json({valid: -1, token});
        }
        else if(signal === 0){     // new user
            res.json({valid: 0});
        }
        else res.json({valid: 1});     // wrong password
    }
    catch(error) {
        console.log(`${error} in login`);
    }
}

module.exports = { login };
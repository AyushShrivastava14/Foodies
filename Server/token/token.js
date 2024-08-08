const jwt = require('jsonwebtoken');

const generateToken = (email) => {
    const payload = {
        email: email
    };

    const secret = 'Foodies';
    const options = {expiresIn: 300};

    return jwt.sign(payload, secret, options);
}

const verifyToken = (token) => {
    const secret = 'Foodies';

    try {
        if(jwt.verify(token, secret)) {
            return true;
        }
    }
    catch(error) {
        return false;
    }
}

module.exports = {generateToken, verifyToken};
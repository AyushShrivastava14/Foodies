const jwt = require('jsonwebtoken');

const generateToken = (email) => {
    const payload = {
        email: email
    };

    const secret = 'Foodies';
    const session = {expiresIn: 180}

    return jwt.sign(payload, secret, session);
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
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {
        email: user.email
    };

    const secret = 'hmm';
    const session = {expiresIn: 180}

    return jwt.sign(payload, secret, session);
}

const verifyToken = (token) => {
    const secret = 'hmm';

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
const bcrypt = require('bcrypt');

const encrypt = async(data) => {
    console.log(data);
    const newPass = await bcrypt.hash(data, 4);
    console.log(newPass);

    return newPass;
}

const decrypt = async(userData, storedData) => {
    return await bcrypt.compare(userData.password, storedData.password);
}

module.exports = {encrypt, decrypt};
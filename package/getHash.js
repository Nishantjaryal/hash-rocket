
const char_string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const char_string_token = "abcdefghijklmnopqrstuvwxyz@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const char_string_lentgh = char_string.length
const char_string_lentgh_token = char_string_token.length

function getHash() {
    let HashID = ""
    for (let index = 1; index <= 36; index++) {
        if (index === 9 || index === 14 || index === 19 || index === 24) {
            HashID += "-";
        }
        else {
            HashID += char_string[Math.floor(Math.random() * (char_string_lentgh - 1))]
        }
    }
    return HashID
}

function getCustomHash(repetetion) {
    let hashtoken = ""
    for (let index = 0; index < repetetion; index++) {
        hashtoken += char_string_token[Math.floor(Math.random() * (char_string_lentgh_token - 1))]
    }
    return hashtoken
}


module.exports = {
    getHash,
    getCustomHash
}


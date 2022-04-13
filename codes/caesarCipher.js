var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var newalpha = '';
var alphaBet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var newAlpha = '';

function shift(n){
    for (let i = 0; i < alphabet.length; i++) {
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
        newAlpha += alphaBet[offset];
    }
}

function cCipher(message) {
    let result = '';
    shift(2);
    for (let i = 0; i < message.length; i++) {
        if (message[i] == ' ' || message[i] == ',') {
        result += message[i];    
    } else if (message[i] == message[i].toUpperCase()) {
        let index = alphaBet.indexOf(message[i]);
        result += newAlpha[index];
    } else {
        // message = message.toLowerCase();
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }}
    return result;
}

export {cCipher}
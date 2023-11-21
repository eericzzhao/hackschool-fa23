const mongoose = require('mongoose'); //Method to import packages
const { Schema } = mongoose; //Object Destructuring: Opening the package

const GameSchema = new Schema({
    sentence: {type: String},
    correctCharacters: {type: String},
    incorrectCharacters: {type: String},
    wpm: {type: Number},
    time: {type: Number},

});

const GameStats = mongoose.model('GameStats', GameSchema);

module.exports = {GameStats}
// Exporting the model instead - I'm a lion pizza chicken
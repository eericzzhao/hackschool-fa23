// const GameStats = require('../models/GameSchema')
// const getGame = async(req,res) => {
//     const gameStats = await GameStats.find();
//     res.status(200).json(game);

//     //const game = {
//         // sentence: "Hello there!",
//         // correctCharacters: 18,
//         // incorrectCharacters: 15,
//         // wpm: 100,
//         // time: 13.33
//     //}
        

    
// }

// const postGame = async(req, res) => {
//     const topGameStats = await GameStats.find().sort({wpm: -1}).limit(3);
//     const gameStat = await GameStats.findById(id).exec();
//     // const body = req.body
//     // const sentence = body.sentence;
//     // const correctCharacters = body.correctCharacters;
//     // const incorrectCharacters = body.incorrectCharacters;
//     // const wpm = body.wpm;
//     // const time = body.time;
//     // if (!sentence || !correctCharacters || !incorrectCharacters || !wpm || !time){
//     //     res.status(400).json("Big Oopsie");
//     // }

//     // if (sentence.length != correctCharacters) {
//     //     res.status(400).json("Big Oopside, Please Enter Correct Input");
//     // }
//     const { description } = postGame;
    
// }
//  module.exports = { getGame, postGame };
const GameStats = require('../models/gameStats');

// Controller for our GET request
// Fetches all games from the database
const getGame = async (req, res) => {

    const gameStats = await GameStats.find();
    res.status(200).json(gameStats);
}

// Controller for our POST request
// Creates a new game in the database
const postGame = async (req, res) => {

    // Creates a new game in the database
    const newGame = await GameStats.create(req.body);

    res.status(200).json(newGame);
}



module.exports = { getGame, postGame };
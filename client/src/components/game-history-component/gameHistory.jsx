import styles from './gameHistory.module.css'; //Front-End: Use "Import"
//Back-End: Use "cont ___ = require('___');"

// Create a functional component that will display game history
// Remember to return one top-level div, and nest the rest of your elements inside of it
// It should take in props for the sentence, correctChars, incorrectChars, wpm, and time
// Export your GameHistory component!
const gameHistory = ({sentence, correctWords, incorrectWords, wpm, time}) => {
    return (
        <div className={styles.card}>
            <p className = {styles.cardContent}>
                <b> </b>Sentence: {sentence}
            </p>
            <p className = {styles.cardContent}>
                <b> </b>Correct Words: {correctWords}
            </p>
            <p className = {styles.cardContent}>
                <b> </b>Incorrect Words: {incorrectWords}
            </p>
            <p className = {styles.cardContent}>
                <b> </b>WPM: {wpm}
            </p>
            <p className = {styles.cardContent}>
                <b> </b>Time: {time}
            </p>
        </div>

    )
}

export default gameHistory; //Needs to be exported afterwards 

/**
 * Netlify Function: random-word
 * This runs on Node.js and acts as the "backend" to serve a random word.
 */

// A simple dictionary data source
const DICTIONARY = [
    "Dziwne u mnie działa :)", "Nie proście, a piwo będzie Wam dane", "Nigdy nie wywołuj BIOS-a na daremno", "Piękna barka da Ci piwo", "Poszukaj w dokumentacji", "Piwo w barze", "Plik nie został znaleziony, ale jest wiele innych ;)"
];

exports.handler = async function(event, context) {
    try {
        // Pick a random word from the dictionary array
        const randomIndex = Math.floor(Math.random() * DICTIONARY.length);
        const randomWord = DICTIONARY[randomIndex];

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ word: randomWord })
        };
    } catch (error) {
        // Handle any errors gracefully
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch word' })
        };
    }
};

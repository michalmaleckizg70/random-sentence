/**
 * Netlify Function: random-word
 * This runs on Node.js and acts as the "backend" to serve a random word.
 */

// A simple dictionary data source
const DICTIONARY = [
    "Epiphany", "Serendipity", "Luminous", "Mellifluous", 
    "Quixotic", "Petrichor", "Ineffable", "Aurora", 
    "Sonorous", "Ethereal", "Vellichor", "Solitude",
    "Liminal", "Hiraeth", "Nefarious", "Wanderlust"
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

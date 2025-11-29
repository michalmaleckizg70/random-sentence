/**
 * Netlify Function: random-word
 * This runs on Node.js and acts as the "backend" to serve a random word.
 */

// A simple dictionary data source
const DICTIONARY = [
    "Małe piwko z korzeniami", "Dziwne u mnie działa :)", "Nie proście, a piwo będzie Wam dane", "Nigdy nie wywołuj przerwania BIOS-a na daremno", "Piękna barmanka poda Ci piwo", "Poszukaj w dokumentacji", "Piwo w barze", "Plik nie został znaleziony, ale jest wiele innych ;)", "Gęba się śmieje, gdy piwo się leje", "Test, testy i bug!", "Kto piwo pije ten długo żyje", "Mądry Polak po errorze", "Kto pije piwo, ten chodzi krzywo", "Nigdy nie ufaj komputerowi, którego nie możesz wyrzucić przez okno", "Niech się leje piwo z nieba, bo humoru nam potrzeba.", "Kod to wiersz. Kompilator to redaktor, który nie ma poczucia humoru.", "Na kłopoty napój złoty", "To nie błąd, to funkcja", "Piwo z Tobą, piwo wszędzie, nie porzuci, zawsze będzie", "Jeśli nie wiesz, co zrobić, zjedz małe co nieco", "Żadna panienka, ani dziwka, nie zastąpi skrzynki piwka", "Boże spraw, by nam się chciało, tak jak nam się nie chce", "Choć nie jestem detektywem, zawsze znajdę budkę z piwem", "Najlepszy sposób na to, żeby znaleźć się gdzieś szybko, to już tam być", "Pijąc piwo, jedząc śledzie będziem silni jak niedźwiedzie", "Pijąc piwo, jedząc śledzie będziem silni jak niedźwiedzie", "Wykształcenie nie piwo - nie musi być pełne", "Czasem jest tak, że wydaje się, że coś jest niemożliwe... a potem się udaje!", "Piana jest wesołością piwa", "Jeśli coś nie działa, spróbuj to zrobić inaczej", "Najlepsza zabawa jest tam, gdzie są przyjaciele", "Nie ma co się spieszyć, bo życie to nie wyścig", "Czasami po prostu siedzimy, nic nie robimy"
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

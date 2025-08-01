const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { text: "Stay away from those people who try to disparage your ambitions.", author: "Mark Twain" },
    { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { text: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" }
];

let availableQuotes = [...quotes];

function generateQuote() {
    if (availableQuotes.length === 0) {
        availableQuotes = [...quotes]; // Reset if all used
    }

    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const quote = availableQuotes.splice(randomIndex, 1)[0]; // Remove from list

    document.getElementById("quote").textContent = `"${quote.text}"`;
    document.getElementById("author").textContent = `— ${quote.author}`;
}

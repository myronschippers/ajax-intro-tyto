let quotesData = [
    { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];
let index = 0;

function getNextQuote() {
	let result = quotesData[index];
	index += 1; // Increase the index
	index = index % quotesData.length; // Ensures we stay in bounds
    return result;
}

module.exports = {
    list: quotesData,
    getNext: getNextQuote
};
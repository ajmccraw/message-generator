var quotes = [
    'That was so fetch.',
    'On Wednesdays we wear pink.',
    'I\'m not like a regular mom, I\'m a cool mom!',
    'She doesn\'t even go here!',
    'I\'m a mouse. Duh!'
];

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
};
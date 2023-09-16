const Comment = require('./Comment');
const AvengerQuote = require('./AvengerQuote');
const ListAvengerQuotes = require('./ListAvengerQuotes');

// Example usage
const comment1 = new Comment("2023-09-16", "Great quote!");
const comment2 = new Comment("2023-09-17", "I love this one!");

const quote1 = new AvengerQuote(1, "Iron Man", "I am Iron Man.", ["image1.jpg"], "2023-09-16");
const quote2 = new AvengerQuote(2, "Captain America", "I can do this all day.", ["image2.jpg"], "2023-09-17");

const avengerQuotes = new ListAvengerQuotes([quote1, quote2]);

// Save to XML file
avengerQuotes.toXML("avenger_quotes.xml");

// Read from XML file
const readAvengerQuotes = ListAvengerQuotes.fromXML("avenger_quotes.xml");
readAvengerQuotes.quotes.forEach((quote) => {
    console.log(quote);
});

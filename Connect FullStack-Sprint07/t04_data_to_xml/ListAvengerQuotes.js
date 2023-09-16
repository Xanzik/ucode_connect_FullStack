const xml2js = require('xml2js');
const fs = require('fs');
const AvengerQuote = require('./AvengerQuote');
const Comment = require('./Comment');

class ListAvengerQuotes {
    constructor(quotes) {
        this.quotes = quotes;
    }

    toXML(fileName) {
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(this);
        fs.writeFileSync(fileName, xml);
    }

    static fromXML(fileName) {
        const xml = fs.readFileSync(fileName, 'utf-8');
        return ListAvengerQuotes.fromXMLString(xml);
    }

    static fromXMLString(xml) {
        return new Promise((resolve, reject) => {
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const quotesData = result.ListAvengerQuotes.AvengerQuote;
                    const quotes = quotesData.map((quoteData) => {
                        return AvengerQuote.fromXMLString(quoteData);
                    });
                    resolve(new ListAvengerQuotes(quotes));
                }
            });
        });
    }
}

module.exports = ListAvengerQuotes;

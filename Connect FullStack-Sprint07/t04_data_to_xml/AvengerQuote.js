const xml2js = require('xml2js');

class AvengerQuote {
    constructor(id, author, quote, photos, publishDate) {
        this.id = id;
        this.author = author;
        this.quote = quote;
        this.photos = photos;
        this.publishDate = publishDate;
    }

    toXML() {
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(this);
        return xml;
    }

    static fromXML(xml) {
        return new Promise((resolve, reject) => {
            xml2js.parseString(xml, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    const avengerQuoteData = result.AvengerQuote;
                    const id = parseInt(avengerQuoteData.id);
                    const author = avengerQuoteData.author;
                    const quote = avengerQuoteData.quote;
                    const photos = avengerQuoteData.photos.photo;
                    const publishDate = avengerQuoteData.publishDate;
                    resolve(new AvengerQuote(id, author, quote, photos, publishDate));
                }
            });
        });
    }
}

module.exports = AvengerQuote;

function getAnonymous(name, alias, affiliation) {
    // Private fields
    let _name = name;
    let _alias = alias;
    let _affiliation = affiliation;

    // Public methods (accessible via the returned object)
    return {
        name: _name,
        alias: _alias,
        affiliation: _affiliation,
    };
}

module.exports = {
    getAnonymous
};  
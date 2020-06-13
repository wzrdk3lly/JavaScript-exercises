const getTheTitles = function(obj) {
    const bookTitles = obj.map(book => book.title);
    return bookTitles;
}

module.exports = getTheTitles;

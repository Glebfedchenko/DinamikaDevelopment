function Counter(count) {
    this.count = count;
}


module.exports = (a) => {
    return new Counter(a);
}
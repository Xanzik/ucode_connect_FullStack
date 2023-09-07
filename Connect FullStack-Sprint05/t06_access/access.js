class Access {
  constructor() {
    this.mark_LXXXV = undefined;
  }

  setMark_LXXXV(value) {
    this.mark_LXXXV = value === null ? 'null' : value;
  }

  getMark_LXXXV() {
    return this.mark_LXXXV;
  }
}

module.exports = Access;

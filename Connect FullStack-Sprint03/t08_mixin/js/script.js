// script.js (including the mixin)
const houseMixin = {
  wordReplace(oldWord, newWord) {
    this.description = this.description.replace(oldWord, newWord);
  },
  wordInsertAfter(targetWord, newWord) {
    const regex = new RegExp(`\\b${targetWord}\\b`, 'gi');
    this.description = this.description.replace(regex, `$& ${newWord}`);
  },
  wordDelete(targetWord) {
    const regex = new RegExp(`\\b${targetWord}\\b`, 'gi');
    this.description = this.description.replace(regex, '');
  },
  wordEncrypt() {
    const encryptedText = this.description.replace(/[a-zA-Z]/g, function (c) {
      return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
    this.description = encryptedText;
  },
  wordDecrypt() {
    const decryptedText = this.description.replace(/[a-zA-Z]/g, function(c) {
      let charCode = c.charCodeAt(0);
      if ((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)) {
        charCode += 13;
      } else if ((charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122)) {
        charCode -= 13;
      }
      return String.fromCharCode(charCode);
    });
    this.description = decryptedText;
  }
};

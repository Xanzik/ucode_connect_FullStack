function addWords(obj, wrds) {
  let wordsArr = obj.words ? obj.words.trim().split(/\s+/) : [];
  let newWordsArr = wrds.trim().split(/\s+/);
  wordsArr.push(...newWordsArr);
  obj.words = [...new Set(wordsArr)].join(' ');
  return obj;
}

function removeWords(obj, wrds) {
  let wordsArr = obj.words ? obj.words.trim().split(/\s+/) : [];
  let removeWordsArr = wrds.trim().split(/\s+/);
  let filteredArr = wordsArr.filter(word => !removeWordsArr.includes(word));
  obj.words = filteredArr.join(' ');
  return obj;
}

function changeWords(obj, oldWords, newWords) {
  const wordsArray = obj.words.trim().split(' ');
  const old = oldWords.trim().split(/\s+/); // Используем регулярное выражение для разделения строки по пробелам
  const oldWordsArray = old.filter(word => wordsArray.includes(word));
  const newWordsArray = newWords.trim().split(' ');
  let count = 0;
  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i].trim(); // Удаляем возможные пробелы в начале и конце слова
    const index = oldWordsArray.indexOf(word);
    if (index !== -1) {
      wordsArray[count] = newWordsArray[index];
      count++;
    }
  }
  obj.words = wordsArray.join(' ');
}

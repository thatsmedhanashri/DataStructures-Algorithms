var canConstruct = function (ransomNote, magazine) {
  // let ransomNote_ = ransomNote.split('')
  // magazine = magazine.split('')

  // for (let i = 0; i < magazine.length; i++) {
  //     for (let j = 0; j < ransomNote_.length; j++) {
  //         if (ransomNote_[j] == magazine[i]) {
  //             ransomNote_[j] = -1
  //             break
  //         }
  //         if (i == magazine.length - 1 && ransomNote_[j] != -1)
  //             return false
  //     }
  // }

  // for (let j = 0; j < ransomNote_.length; j++) {
  //     if (ransomNote_[j] != -1) {
  //         return false
  //     }
  // }

  // return true

  let str = ransomNote;
  for (let i = 0; i < magazine.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] == magazine[i]) {
        str = str.slice(0, j) + str.slice(j + 1);
        break;
      }
    }
  }
  return str.length > 0 ? false : true;
};

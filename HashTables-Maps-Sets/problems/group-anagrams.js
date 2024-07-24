var groupAnagrams = function (strs) {
  if (strs.length == 1) return [[strs[0]]];

  let sorted = [];
  let output = [];

  const array1 = [2, 5, 9, 5];

  let index = array1.findIndex((x) => x == 5);

  console.log(index);

  for (let i = 0; i < strs.length; i++) {
    sorted.push(strs[i].split("").sort().join(""));
  }

  for (let i = 0; i < sorted.length; i++) {
    let temp = [];
    if (sorted[i] != -1) temp.push(strs[i]);

    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] == -1) break;

      if (sorted[i] == sorted[j]) {
        temp.push(strs[j]);
        sorted[j] = -1;
      }
    }
    sorted[i] = -1;
    if (temp.length > 0) output.push(temp);
  }

  return output;
};

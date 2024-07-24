var isAnagram = function (s, t) {
  if (s.length != t.length) return false;

  maps = new Map();
  mapt = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!maps.get(s[i])) {
      maps.set(s[i], 1);
    } else {
      maps.set(s[i], maps.get(s[i]) + 1);
    }

    if (!mapt.get(t[i])) {
      mapt.set(t[i], 1);
    } else {
      mapt.set(t[i], mapt.get(t[i]) + 1);
    }
  }

  if (maps.length != mapt.length) return false;

  for (let key of maps.keys()) {
    if (maps.get(key) != mapt.get(key)) return false;
  }

  return true;

  // s = s.split('')
  // t = t.split('')
  // return s.sort().join('') == t.sort().join('')
};

var isIsomorphic = function (s, t) {
  objs = {};
  objt = {};

  if (s.length != t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (objs[s[i]] && objs[s[i]] != t[i]) return false;
    objs[s[i]] = t[i];
    if (objt[t[i]] && objt[t[i]] != s[i]) return false;
    objt[t[i]] = s[i];
  }

  return true;
};

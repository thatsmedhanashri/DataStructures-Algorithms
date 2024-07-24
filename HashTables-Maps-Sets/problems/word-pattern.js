var wordPattern = function (s, t) {
  s = s.split("");
  t = t.split(" ");
  // objp = {}
  // objs = {}

  // if (p.length != s.length)
  //     return false

  // for (let i = 0; i < p.length; i++) {
  //     if (objp[p[i]] && objp[p[i]] !== s[i]){
  //         return false
  //     }
  //     objp[p[i]] = s[i]
  //     if (objs[s[i]] && objs[s[i]] !== p[i]){
  //         return false
  //     }
  //     objs[s[i]] = p[i]
  // }

  // return true

  maps = new Map();
  mapt = new Map();

  if (s.length != t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (maps.has(s[i]) && maps.get(s[i]) != t[i]) return false;
    maps.set(s[i], t[i]);
    if (mapt.has(t[i]) && mapt.get(t[i]) != s[i]) return false;
    mapt.set(t[i], s[i]);
  }

  return true;
};

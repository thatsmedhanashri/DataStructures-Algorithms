// set instance
set_ = new Set([1, 2, 3, 3]);

// add()
set_.add(5);
set_.add(9);
set_.add(9);
set_.add(9);
set_.add(9);

// iteration
for (const val of set_) {
  console.log(val);
}

// values()
for (const x of set_.values()) {
  console.log("values - ", x);
}

// set.delete()
set_.delete(9);

// set.has()
console.log("has - ", set_.has(5));

// set.size
console.log("size - ", set_.size);

// entries()
// not useful
// A Set has no keys, so keys() returns the same as values(). This makes Sets compatible with Maps.
// for (const x of set_.entries()) {
//   console.log("entries - ", x);
// }

// keys()
// not useful
// A Set has no keys, so keys() returns the same as values(). This makes Sets compatible with Maps.
// for (const x of set_.keys()) {
//   console.log("keys - ", x);
// }

// map instance
map_ = new Map([["Rutuja", 56]]);

// set
map_.set("Neha", 19);
map_.set("Smriti", 23);

// get
console.log(map_.get("Rutuja"));

// map.size
console.log(map_.size);

// delete
map_.delete("Neha");
console.log(map_.size);

// map.has
console.log(map_.has("Rutuja"));
console.log(map_.has("Neha"));

// clear
// map_.clear();
console.log(map_.size);

// map.foreach
// forEach loop
map_.forEach((val, key) => {
  console.log(key, " ", val);
});

// entries()
// for of loop
for (const x of map_.entries()) {
  console.log("x - ", x);
}

// values()
for (const val of map_.values()) {
  console.log("val - ", val);
}

// keys()
for (const key of map_.keys()) {
  console.log("key - ", key);
}

// instanceof Map
console.log(map_ instanceof Map);

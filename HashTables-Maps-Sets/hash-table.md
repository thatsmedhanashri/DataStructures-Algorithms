##

It stores values in key-value pairs.

## Hash function

It take input and generates output [output length will always be same].
In hash tables, we use keys to store data. It internally mapped to some value which used to allocate memory to that value.

## Time complexity

insert - O(1)
lookup - O(1)
delete - O(1)
search - o(1)

## Hash Collisions

Causes because of enough data and limited memory.
Sometimes hash function points to the same address for 2 or more keys.
Collision resolution:
One of the easiest methods for resolving collisions is separated chaining. Colliding elements are kept in separate linked lists connected to each hash table record. The new element is added to the linked list at the appropriate index whenever there is a collision.

## Difference between Objects and Maps

Map can have keys of any data type, including objects, functions, and primitive values.
Map keys are ordered based on their insertion order.
Maps have built-in methods for iteration, such as forEach, keys, values, and entries.

Object keys are always strings or symbols. If other data types are used as keys, they are automatically converted to strings.
Object properties do not have a guaranteed order. While most modern JavaScript engines maintain the insertion order, it’s not specified by the language.

## Difference between Map and Set

In Maps, the data is stored as a key-value pair whereas in Set data is a single collection of values that are unique.

## Benefits and Disadvantages

Fast lookups
Fast inserts
Flexible keys [good collision resolution needed]

Unordered
Slow key iteration [While getting all the keys, we need to go through the entire memory allowcated to Hash Map]

It improves time complexity but utilizes more memory.

## Map

JS objects are not directly iterable, but map is directly iterable.
JS objects have no size property but map have.
JS objects keys must be a String, but map keys can be any datatype.
JS object keys are not well ordered, but map keys are ordered by insertion.
JS objects may have default keys, but map don't have.

## Set

A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
The values can be of any type, primitive values or objects.

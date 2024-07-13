## Arrays

Static arrays having specific memory, so limited data we can store into it.

Dynamic arrays - we can add extra space, but when we add it... it doubles the existing allowcated size. And this is costly operation because we need to copy existing data to new location and then add latest data.

## Hash Tables

Data inserted is not maintain the insertion order.

## Linked List

Java comes with built-in linked list, but JS don't have built-in linked list but we can implement.

In linked list if we want insert a data in between, we just need to change pointing of two nodes probably.
In array we need to shift all the next elements, which results O(n).

In arrays elements are indexed, so we can get specific indexed element directly in O(1).
But in linked list we to traverse from head till we get specific data.

Arrays have contineous memory locations, while linked lists have not. So iterating over linked list is slower than interating over an array.

In hash table insertion order is not maintained, but in linked list it is maintained because each node points to the next node.

## Linked list complexity - singly or doubly

append - O(1)
prepend - O(1)
insert - O(n)
lookup - O(n)
delete - O(n)

## Pointer

Reference to the RAM memory.
let obj1 = {name: 'abc'}
let obj2 = obj1

Here obj1 and obj2 refer to the same memory location.

In JS when we change, delete obj1; obj2 = 'anystring'
the previous value {name: 'abc} get garbage collected automatically
But in low level languages like C++, we need to manage memory manually. So we manually need to delete unreferenced item from the memory.

## Doubly linked list

Each node have a data, reference to the previous node and reference to the next node.
In singly linked list we can traverse in only one direction. But in doubly linked list we can traverse in both directions.

As we traverse from both ends, lookup is faster as compared to singly linked list.
It is actually O(n/2), but we usually ignore constants so technically it is O(n)

Singly linked list implementation is easy and less complex, also it require less memory as we don't store reference of previous node.
We can use it if there are more insertion and deletion operations, and less searching.

## Linked list is low level data structure

## Linekd list pros and cons

Fast insertion
Fast deletion
Ordered
Flexible [can grow and shrink easily, without any costly operation]
We can use linked link to resovle collision problem in hash tables.

Slow lookup
More memory

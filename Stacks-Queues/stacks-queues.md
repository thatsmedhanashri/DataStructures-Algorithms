## Stacks and Queues

Stacks and Queues are higher level data structures, that are built on lower level data structres like arrays, linekd lists.
JS doesn't have in-built stack and queue data structure.

Fast operations push, pop, peek, enqueue, dequeue.
Slow lookup.

## Stacks - LIFO

lookup - O(n) [we usually don't traverse stack]
pop - O(1)
push - O(1)
peek - O(1)

Example - browsing history

We can use array or linked list to implement the stack. It depends on our need, like need to improve time complexity [array] or want to use memory efficiently [linked list]

## Queues - FIFO

lookup - O(n) [we usually don't traverse stack]
enqueue - O(1)
dequeue - O(1)
peek - O(1)

example - restaurant app, printer

We should not implement queues using arrays. Because in queues we want to remove first element, if we are using array data sructure we need to shift all elements and it is not efficient. We should use linked list instead.

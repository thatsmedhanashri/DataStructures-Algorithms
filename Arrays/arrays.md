Arrays arranges items sequentially.

lookup - O(1)
push - O(1)
pop - o(1)
insert - O(n)
delete - O(n)

## Types of arrays

Static:
When you allocate an array in a low-level language like C++ or Java, you have to specify upfront how many indices you want.

int main(){
int arr[5]
}

This makes the array static because it only has five indices that you can use. This makes it impossible to append items when all five indices are filled with values. The upside to this is that if you know that you are only going to have five elements, then appending to this array becomes worst case O(1) time. This is because the memory address is already there in your RAM, all you are doing is filling it with a value.

Time and Space complexity:
Space: O(n)
Lookup: O(1)
Append: O(1)
Insert: O(n)
Delete: O(n)

Dynamic:
Dynamic arrays differ from static arrays in that they don’t have a fixed size. How a dynamic array works is that it resizes itself whenever it runs out of space. This is usually by doubling itself.

When you allocate a dynamic array your language of choice will make a static array with a set size. Let’s say that this size is 10.
Let’s say you go to append an 11th item to your array. This will make your array run out of space causing it to create a bigger array that’s double its size (20).
After this the old array of size 10 needs to copy all of its values over to the bigger array that has a size of 20.
Now the old array will tell your OS to delete it making that memory free memory.
Finally, the bigger array of size 20 will now append your 11th item to it.

As you can see this is a very costly process, but it doesn’t always occur every time you append to it. For example, if my set size was 10 and I appended a 9th item, we would not go through this process. However, we always look at the worst case scenario and that means that appending to dynamic arrays is O(n) time.

Time and Space complexity:
Space: O(n)
Lookup: O(1)
Append: O(n)
Insert: O(n)
Delete: O(n)

## Low level and High level languages:

C++ is low level language while JS is higher level language. In C++ we manage the memory manually like while declaring array we need to define it's size.
In JS, JS itself take cares of memory.
As in low level languages we have more control over memory, low level languages are fast as comapred to high level languages.

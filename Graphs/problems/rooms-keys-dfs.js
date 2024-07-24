var canVisitAllRooms = function (rooms) {
  let visited = [];
  let count = 0;

  function check(index) {
    visited[index] = true;
    count++;

    for (let i = 0; i < rooms[index].length; i++) {
      if (!visited[rooms[index][i]]) check(rooms[index][i]);
    }
  }

  check(0);
  return count == rooms.length;
};

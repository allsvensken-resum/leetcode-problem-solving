/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let visited = new Map();
    let currIsLand = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (dfs(grid, i, j, visited) > 0) currIsLand += 1;                 
        }
    } 
    
    return currIsLand;
};

const dfs = (grid, row, col, visited) => {
   let size = 1; 
   if (isOutBound(grid, row, col)) return 0;
   if (!isLand(grid[row][col])) return 0;
   if (haveVisited(row, col, visited)) return 0;
   visited.set(composeRowAndColAsPos(row, col));
    
   let directions = [[row, col + 1], [row, col - 1], [row + 1, col], [row - 1, col]]; 
   for (let dir of directions) {
      size += dfs(grid, dir[0], dir[1], visited);
   }
    
   return size;
}

const isLand = (s) => {
   return s === "1"; 
}

const isOutBound = (grid, row, col) => {
  return row < 0 || row >= grid.length || col < 0 || col >= grid[0].length; 
}

const composeRowAndColAsPos = (row, col) => {
   return `${row},${col}`; 
}

const haveVisited = (row, col, visited) => {
    return visited.has(composeRowAndColAsPos(row, col));
}
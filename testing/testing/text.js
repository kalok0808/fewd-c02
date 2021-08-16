const paths = ['path1', 'path2', 'path3', 'path4', 'path5']
const doors = ['door1', 'door2', 'door3', 'door4', 'door5']

// generate a random number for each path
const pathObj = {};
paths.forEach(elem => {
    pathObj[elem] = Math.random()
})
console.log(pathObj)

// sort the path by its random number
let sortedPathObj = Object.entries(pathObj).sort((a, b) => b[1] - a[1])
console.log(sortedPathObj)

// assign each door with path orderly
const doorObj = {};
for (let i = 0; i < doors.length; i++) {
    doorObj[doors[i]] = sortedPathObj[i][0]
}
console.log(doorObj)
const arr = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]];
// 0,0 1,0 2,0 -> 
const newArr = [[],[],[]];


for(let i = 0; i< arr.length; i++) {
    for(let j = 0; j< arr.length; j++) {
        newArr[i][j] = arr[j][i];
    }
}
console.log(newArr)
const last = newArr.map(elem => elem.reverse());

console.log(last)

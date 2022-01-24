let arry3 = [1, 4, 11, 2, 37, -4]
let arry2 = [0,21, 33, 6, 0, -9]
let arry1 = [0, 1 , 2, 3, 4, 5]

let currentIndex = 0
let comparableIndex = 1

while (currentIndex < arry1.length) {
    if (arry1[currentIndex] + arry1[comparableIndex] === 0) {
        console.log(true)
        break;
    } else if (currentIndex === arry1.length - 1 && comparableIndex === arry1.length - 1) {
        console.log(false)
        break;
    } else if (comparableIndex === arry1.length - 1) {
        currentIndex += 1
    } else {
        comparableIndex += 1
    }
}
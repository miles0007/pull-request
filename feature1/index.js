
function myNetPrice(price, tax=0.1, discount=0.1) {
    let NetPrice = price - price * discount;
    NetPrice = NetPrice + NetPrice * tax;
    return NetPrice
}


console.log(myNetPrice(100, 0.1, 0));
console.log(myNetPrice(100, 0.2, 0.1));
console.log(myNetPrice(100));
console.log(myNetPrice(100, 0.3, 0.2));

var rent = 5000

function exp(other) {
    var rent = other + 2500;
    return rent
}

exp(500)
console.log(rent);


function howMay(val) {
    var answer = ""

    switch(val) {
        case 1:
            answer = "ek number"
            break;
        case "1":
            answer = "ek string"
            break;
        case "L":
            answer = "ek letter"
            break;
    }
    return answer;
}

console.log(howMay(10-9));

var arr = [ [1,2], [3,4], [4,5] ]

for (let i=0; i < arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

function multiply(arr, n) {
    if (n <= 0) {
        return 1
    } else {
        return multiply(arr, n-1) * arr[n-1];
    }
}

console.log(multiply([1,2,3,4,5], 4));

let result = ""

for(let i=0; i < 4; i++) {
    for (let j=0; j <=4; j++) {
        result += '*'
    }
}

console.log(result.length);

var ourArray = []

var i = 0;

do {
    ourArray.push(i);
    i++
} while (i < 5);

console.log(ourArray);

function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("calculateSum(5) =", calculateSum(5)); 


const multiply = function (a, b) {
    return a * b;
};

console.log("multiply(3, 4) =", multiply(3, 4)); 


const power = (a, b) => a ** b;

console.log("power(2, 5) =", power(2, 5));


function harmonicSeries(n) {
    if (n === 1) {
        return 1;
    }
    return 1 / n + harmonicSeries(n - 1);
}

console.log("harmonicSeries(4) =", harmonicSeries(4));


function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log("double(6) =", double(6)); 


function processSet(set, callback) {
    for (let value of set) {
        callback(value);
    }
}

const mySet = new Set([1, 2, 3, 4]);

processSet(mySet, (value) => {
    console.log("Set value:", value * 2);
});

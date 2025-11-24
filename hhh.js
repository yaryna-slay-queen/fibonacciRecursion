let arr = [0, 1];
console.log("just fibonacci")

function fibonacci(step) {
    for (let i = 0; i < step; i++) {        
        let next = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(next);  
        if (arr.length > step) {
            arr.pop();
        }
    }
    console.log("fibonacci:", arr);
}

fibonacci("3", 3); 
fibonacci("5", 5); 
fibonacci("7", 7); 


console.log("Recursion Fibonacci")

function fibRec(step, m = 2, n = 3, arrRec = []) {
    if (step <= 0) {
        return arrRec;
    }
    arrRec.push(m);    
    return fibRec(step - 1, n, m + n, arrRec);
}

const a = fibRec(3);
console.log("fibonacciRecursion 3:", a);

const b = fibRec(5);
console.log("fibonacciRecursion 5:", b);

const c = fibRec(7);
console.log("fibonacciRecursion 7:", c);
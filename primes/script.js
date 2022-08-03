let input;
let n;

do{
    input = prompt('Pls enter positive number:');
     n = Number(input);
     if (Number.isInteger(n) && n > 0) {
        showPrimes(n);
        document.write();
            break;
        }
}while(input !== Number || input < 0 || input == null )


function showPrimes(n) {
    let prime = [];
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        prime.push(i);
    }
    alert(`For n = ${n} prime number are ` + prime.join(" "));
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if(n % i == 0) return false;
    }
    return true
}



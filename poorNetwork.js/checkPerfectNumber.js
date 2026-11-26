const checkPerfectNumber = function(number) {

    if (number <= 1) {
        return false;
    }

    let sum = 0;

    for (let value = 1; value < number; value++) {

        if (number % value=== 0) {

            sum = sum + value;
        }
    }

    return sum === number;
}

console.log(checkPerfectNumber(35));

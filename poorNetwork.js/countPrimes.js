function countPrimes(upperLimit) {

    let count = 0;

    for (let number = 2; number < upperLimit; number++) {

        let divisorCount = 0;

        for (let divisor = 1; divisor <= number; divisor++) {

            if (number % divisor === 0) {
                divisorCount++;
            }
        }

        if (divisorCount === 2) {
            count++;
        }
    }

    return count;
}

console.log(countPrimes(20));

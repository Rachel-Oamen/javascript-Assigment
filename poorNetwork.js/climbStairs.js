const climbStairs = function (totalSteps) {

    if (totalSteps <= 2) {
        return totalSteps;
    }

    let first = 1;
    let second = 2;

    for (let step = 3; step <= totalSteps; step++) {

        let next = first + second;

        first = second;
        second = next;
    }

    return second;
}

console.log(climbStairs(8));

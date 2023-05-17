function findLargest(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Both values must be integers.");
    }
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
try {
    let largest = findLargest(5, 7.5);
    console.log(largest);
} catch (error) {
    console.error(error);
}
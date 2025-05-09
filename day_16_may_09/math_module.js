function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`); // backtick
}
function mul(a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
}
module.exports = { add, mul };
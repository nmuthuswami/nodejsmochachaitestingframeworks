const addition = (a,b)=> a + b;
const subraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => b !==0 ? a / b : undefined;

module.exports = {addition, subraction, multiplication, division};
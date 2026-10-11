function calculateGrade(score){
    if (typeof score !== 'number' || Number.isNaN(score)) {
        return 'wrong input';
    }
    if (score < 0 || score > 100) {
        return 'wrong input';
    }
    if (score >= 90 && score <= 100) {
        return 'A';
    }
    if (score >= 80 && score < 90) {
        return 'B';
    }
    if (score >= 70 && score < 80) {
        return 'C';
    }
    if (score >= 60 && score < 70) {
        return 'D';
    }
    else {
        return 'F';
    }
}

function checkAccess(age, hasTicket){
    if (age >= 18 && hasTicket === true) {
        return true;
    }
    else {
        return false;
    }
}

console.log(calculateGrade("hello")); // returns 'wrong input'
console.log(calculateGrade(200)); // returns 'wrong input'
console.log(calculateGrade(100)); // returns 'A'
console.log(calculateGrade(90)); // returns 'A'
console.log(calculateGrade(95)); // returns 'A'
console.log(calculateGrade(89)); // returns 'B'
console.log(calculateGrade(85)); // returns 'B'
console.log(calculateGrade(72)); // returns 'C'
console.log(calculateGrade(65)); // returns 'D'
console.log(calculateGrade(0)); // returns 'F'
console.log(calculateGrade(50)); // returns 'F'
console.log(calculateGrade(-1)); // returns 'wrong input'

console.log(checkAccess(20, true)); // returns true
console.log(checkAccess(17, true)); // returns false
console.log(checkAccess(20, false)); // returns false
console.log(checkAccess(17, false)); // returns false
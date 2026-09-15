const fs = require('fs');

// CREATE / WRITE
fs.writeFileSync(
    'student.txt',
    'Name: Satyam Verma\nRoll Number: 1028\nBranch: CSE\nSemester: 3rd'
);

console.log('Student file created successfully');

// READ
let data = fs.readFileSync('student.txt', 'utf8');

console.log('\nStudent Details:');
console.log(data);

// UPDATE
fs.appendFileSync(
    'student.txt',
    '\nSubject: Full Stack Development\nMarks: 95\nAttendance: 95%'
);

console.log('\nStudent information updated successfully');

// READ AGAIN
data = fs.readFileSync('student.txt', 'utf8');

console.log('\nUpdated Student Details:');
console.log(data);
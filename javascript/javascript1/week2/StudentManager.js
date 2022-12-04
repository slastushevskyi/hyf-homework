const class07Students = [];
function addStudentToClass(studentName) {
    studentName = studentName.trim();
    if (studentName === "") {
        console.log(`Type valid name`);
    }
    else if (class07Students.length >= 6 && studentName !== "Queen" ) {
        console.log("Cannot add more students to class 07");
        if (studentName === "Queen" && class07Students.length === 6 && class07Students.includes("Queen")===false) {
            class07Students.push("Queen");
        }
    }
    else if (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} is already in the class`);
    }
    else {
    class07Students.push(studentName);
    }
}
function getNumberOfStudents() {
    return class07Students.length;
}
addStudentToClass(" ");
addStudentToClass(" ");
addStudentToClass("Nikita");
addStudentToClass("Victoria");
addStudentToClass("Daria");
console.log(class07Students);
addStudentToClass("Victoria");
addStudentToClass("Sam");
addStudentToClass("Mike");
console.log(class07Students);
addStudentToClass("Tim");
console.log(class07Students);
addStudentToClass("Martin");
console.log(class07Students);
addStudentToClass("Queen");
console.log(class07Students);
console.log(getNumberOfStudents());
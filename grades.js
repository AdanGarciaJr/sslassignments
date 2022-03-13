const readline = require("readline")

let grades = ["A", "B", "C", "D", "F", "INVALID GRADE"];

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question("Please enter your name: ", (name) => {
    r1.question("Assignment: ", (assignment) => {
        r1.question("Thank you. Please enter the grade you wish to convert into a letter: ", (gradeStr) =>{
            let grade = parseInt(gradeStr)
            if(grade <= 100 && grade >=90){
                console.log(name + ", your letter grade for " + assignment + " is " + grades[0])
            }
            else if(grade <= 89 && grade >= 80){
                console.log(name + ", your letter grade for " + assignment + " is " + grades[1])
            }
            else if(grade <= 79 && grade >= 70){
                console.log(name + ", your letter grade for " + assignment + " is " + grades[2])
            }
            else if(grade <= 69 && grade >= 60){
                console.log(name + ", your letter grade for " + assignment + " is " + grades[3])
            }
            else if(grade <= 59 && grade >= 0){
                console.log(name + ", your letter grade for " + assignment + " is " + grades[4])
            }
            else{
                console.log(grades[5])
            }
        })
    })
})

import sys

name = raw_input ("Please enter your name: ")

assignment = raw_input ("Assignment: ")

grades = ["A", "B", "C", "D", "F", "INVALID GRADE"]

gradeStr = raw_input ("Thank you. Please enter the grade you wish to convert into a letter: ")

grade = int(gradeStr)

if grade <= 100 and grade > 89:
    print(name + ", your letter grade for " + assignment + " is " + grades[0])
elif grade <= 89 and grade > 79:
    print(name + ", your letter grade for " + assignment + " is " + grades[1])
elif grade <= 79 and grade > 69:
    print(name + ", your letter grade for " + assignment + " is " + grades[2])
elif grade <= 69 and grade > 59:
    print(name + ", your letter grade for " + assignment + " is " + grades[3])
elif grade < 60 and grade > -1:
    print(name + ", your letter grade for " + assignment + " is " + grades[4])
else:
    print(grades[5])
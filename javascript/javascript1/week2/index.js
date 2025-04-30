//Fullname 
function getFullname(firstname, surname, useFormalName, isMale){
    let fullname = "";
    if(!firstname){
        console.log("please write your firstname");
        return;
    }
    if(!surname){
        console.log("please write your surname");
        return;
    }
    if (useFormalName) {
        if (isMale){
          fullname="Lord ";
        }
        else{
            fullname="Miss ";
        }
    }
    fullname = fullname + firstname + " " + surname;
    return fullname;
}

const fullname1= getFullname("Besart","Elezi", true,true);
console.log(fullname1);
const fullname2= getFullname("Benjamin","");
console.log(fullname2);



//Event application
function getEventWeekday(daysAfter){
    const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    const today = new Date().getDay();
    const eventToBeHeld = today + daysAfter;
    const postionInArray = (eventToBeHeld % 7) - 1;
    return weekDays[postionInArray];
}
console.log(getEventWeekday(9));



//Weather wear
function whatToWear(temperature){
    let clothes = null;
    if(temperature <= 0){
        clothes = "Boots,gloves,and scarf";
    }
    else if(temperature > 0 && temperature <= 17){
        clothes = "Jacket and pants";
    }
    else{
        clothes = "T-shirt";
    }
    return clothes;
}
const clothesToWear = whatToWear(177);
console.log(clothesToWear);



//Student manager
const class07Students = ["s1", "s2", "s3", "s4", "s5", "s6"];

function addStudentToClass(studentName) {
    const classSize = class07Students.length;

    if (!studentName) return;

    if (classSize < 6 || studentName === "Queen"){
        for (let index = 0; index < class07Students.length; index++) {
            const studentItem = class07Students[index];
            console.log('Student ', studentItem)
            if (studentName === studentItem) {
                console.log("Student " + studentItem + " is already in the class.")
                return;
            }
        }
        class07Students.push(studentName);
    } else {
        console.log("Cannot add more students to class 07")
    }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("");
// addStudentToClass("Queen");
console.log(getNumberOfStudents());

console.log(class07Students);
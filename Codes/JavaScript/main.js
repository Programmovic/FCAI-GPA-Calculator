
var a = 3.7, as = 4, b = 3, bs = 3.3, c = 2.4, cs = 2.7, d = 2, ds = 2.2, G = 0, hours = 0, passedHours = 0, Gpa, subjs = 0;
let userSubjs = document.getElementById("subjsTable");
var addSubject = document.getElementById("add");
var gpaPrint = document.getElementById("gpa");
var subjsPrint = document.getElementById("subjs");
var hrsPrint = document.getElementById("hrs");
var passedHrsPrint = document.getElementById("passed");
gpaPrint.innerHTML = 0.00.toFixed(2);
subjsPrint.innerHTML = subjs;
hrsPrint.innerHTML = hours;
passedHrsPrint.innerHTML = passedHours;
window.onload = function () {
    document.querySelector("[name='subject']").focus();
}
addSubject.addEventListener("click", addCourse);

function addCourse() {

    var subject = document.querySelector("[name='subject']").value;
    var h = document.querySelector("[name='hour']").value;
    var grade = document.querySelector("[name='grade']").value;
    if (subject != "" && h != "" && grade != "") {
        hours += parseInt(h);
        userSubjs.innerHTML += "<tr><td>" + subject + "</td><td>" + h + "</td><td>" + grade + "</td></tr>";

        if (grade == "A+" || grade == "a+") {
            passedHours += parseInt(h);
            G += (h * as);
        }

        else if (grade == "A" || grade == "a") {
            passedHours += parseInt(h);
            G += (h * a);
        }

        else if (grade == "B+" || grade == "b+") {
            passedHours += parseInt(h);
            G += (h * bs);
        }

        else if (grade == "B" || grade == "b") {
            passedHours += parseInt(h);
            G += (h * b);
        }

        else if (grade == "C+" || grade == "c+") {
            passedHours += parseInt(h);
            G += (h * cs);
        }
        else if (grade == "C" || grade == "c") {
            passedHours += parseInt(h);
            G += (h * c);
        }
        else if (grade == "D+" || grade == "d+") {
            passedHours += parseInt(h);
            G += (h * ds);
        }

        else if (grade == "D" || grade == "d") {
            passedHours += parseInt(h);
            G += (h * d);
        }
        else if (grade == "F" || grade == "f") {
            G += (h * 0);
        }
        if (grade == "A+" || grade == "a+" || grade == "A" || grade == "a" || grade == "B+" || grade == "b+" || grade == "B" || grade == "b" || grade == "C+" || grade == "c+" || grade == "C" || grade == "c" || grade == "D+" || grade == "d+" || grade == "D" || grade == "d" || grade == "F" || grade == "f") {
            Gpa = G / passedHours;
        }

        subjs += 1;
        gpaPrint.innerHTML = (Math.round(Gpa * 100) / 100).toFixed(2);
        subjsPrint.innerHTML = subjs;
        hrsPrint.innerHTML = hours;
        passedHrsPrint.innerHTML = passedHours;
    }
}



import { get, post } from "./requester.js";

const html = {
    'getAllStudents': () => document.getElementById('all-students'),
    'getFirstName': () => document.getElementById('first-name'),
    'getLastName': () => document.getElementById('last-name'),
    'getFacultyNumber': ()=> document.getElementById('faculty-number'),
    'getGrade': () => document.getElementById('grade')
};

const actions = {
    'load-students': async function() {
              try {
                  const students = await get('appdata', 'students');
                  const studentContainer = html.getAllStudents();
                  const fragment = document.createDocumentFragment();

                  students.forEach(student => {
                      const line = document.createElement('tr');
                      const studentId = document.createElement('td');
                      const studentFirstName = document.createElement('td');
                      const studentLastName = document.createElement('td');
                      const studentFNum = document.createElement('td');
                      const grade = document.createElement('td');

                      studentId.textContent = student.id;
                      studentFirstName.textContent = student.firstName;
                      studentLastName.textContent = student.lastName;
                      studentFNum.textContent = student.facultyNumber;
                      grade.textContent = Number(student.grade).toFixed(2);

                      line.append(studentId, studentFirstName, studentLastName, studentFNum, grade);
                      fragment.append(line);

                  });

                  studentContainer.innerHTML = "";
                  studentContainer.appendChild(fragment);
              }catch (e) {
                  alert(e);
              }
    },
    'create-student': async function() {
        const $firstName = html.getFirstName();
        const $lastName = html.getLastName();
        const $facultyNumber = html.getFacultyNumber();
        const $grade = html.getGrade();
        let studentsCount = 0;
        try {
            const students = await get('appdata', 'students');
            studentsCount = students.length;
        }catch (e) {
            alert(e);
        }

        if (($firstName !== null && $lastName !== null && $facultyNumber !== null && $grade !== null)
        && ($firstName !== "" && $lastName !== "" && $facultyNumber !== "" && $grade !== "")
        && (Number($facultyNumber.value) !== NaN && Number($grade.value) !== NaN)){

            const studentData = {
                id: ++studentsCount,
                firstName: $firstName.value,
                lastName: $lastName.value,
                facultyNumber: $facultyNumber.value,
                grade: $grade.value
            };

            try {
                const student = await post("appdata", "students", studentData);

                $firstName.value = "";
                $lastName.value = "";
                $facultyNumber.value = "";
                $grade.value = "";

                this["load-students"]();
            }catch (e) {
                alert(e);
            }

        }
    }
};

function handleEvent(e) {
    if (typeof actions[e.target.id] === 'function'){
        e.preventDefault();

        actions[e.target.id]();
    }
}

(function attachEvents() {
    document.addEventListener('click', handleEvent);
}());
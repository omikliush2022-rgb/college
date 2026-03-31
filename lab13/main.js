
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

function Course(title) {
    this.title = title;
    this.students = [];
}

Course.prototype.addStudent = function (student) {
    this.students.push(student);
    student.courses.push(this.title);
};

Course.prototype.showStudents = function () {
    console.log(`Студенти курсу "${this.title}":`);
    this.students.forEach(student => {
        console.log("- " + student.name);
    });
};

function Teacher(name) {
    Person.call(this, name);
    this.courses = [];
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.addCourse = function (course) {
    this.courses.push(course);
};

Teacher.prototype.showCourses = function () {
    console.log(`Курси викладача ${this.name}:`);
    this.courses.forEach(course => {
        console.log("- " + course.title);
    });
};

function Student(name) {
    Person.call(this, name);
    this.courses = [];
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.viewCourses = function () {
    console.log(`Курси студента ${this.name}:`);
    this.courses.forEach(course => {
        console.log("- " + course);
    });
};

const courseJS = new Course("JavaScript");
const courseHTML = new Course("HTML & CSS");

const teacher = new Teacher("Ігор Тупичак");
teacher.addCourse(courseJS);
teacher.addCourse(courseHTML);

const student1 = new Student("Діана");
const student2 = new Student("Андрій");

courseJS.addStudent(student1);
courseJS.addStudent(student2);
courseHTML.addStudent(student1);

teacher.showCourses();
courseJS.showStudents();
student1.viewCourses();
student2.viewCourses();

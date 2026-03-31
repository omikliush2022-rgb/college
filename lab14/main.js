
class Person {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Ім'я: ${this.name}`;
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students.map(s => s.name).join(", ");
  }
}

class Teacher extends Person {
  constructor(name) {
    super(name);
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  getCourses() {
    return this.courses.map(c => c.title).join(", ");
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
    course.addStudent(this);
  }

  viewCourses() {
    return this.courses.map(c => c.title).join(", ");
  }
}

function main() {
  const courseJS = new Course("JavaScript");
  const courseHTML = new Course("HTML & CSS");

  const teacher = new Teacher("Ігор");
  teacher.addCourse(courseJS);
  teacher.addCourse(courseHTML);

  const student1 = new Student("Анатолій");
  const student2 = new Student("Влад");

  student1.enroll(courseJS);
  student2.enroll(courseJS);
  student2.enroll(courseHTML);

  console.log("Викладач:", teacher.getInfo());
  console.log("Курси викладача:", teacher.getCourses());

  console.log("Студент:", student1.getInfo());
  console.log("Його курси:", student1.viewCourses());

  console.log("Студент:", student2.getInfo());
  console.log("Його курси:", student2.viewCourses());

  console.log("Студенти курсу JavaScript:", courseJS.getStudents());
}

main();

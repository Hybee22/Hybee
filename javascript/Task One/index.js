const fullName = "Ibrahim Adekunle";
const courses = ["HTML", "CSS", "JavaScript", "Node JS"];

console.log(`Full Name: ${fullName}`);

for (let course of courses) {
  console.log(`Courses: ${course}`);
}

if (courses.length % 2 === 0) {
  // console.log("EVEN");
  for (let i = 0; i <= 200; i += 2) {
    console.log(i);
  }
} else if (courses.length % 2 === 1) {
  // console.log("ODD");
  for (let i = 1; i <= 200; i += 2) {
    console.log(i);
  }
}

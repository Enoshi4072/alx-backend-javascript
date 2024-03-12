export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      for (const newGrade of newGrades) {
        if (newGrade.studentId === student.id) {
          grade = newGrade.grade;
          break;
        }
      }
      return { ...student, grade };
    });
}

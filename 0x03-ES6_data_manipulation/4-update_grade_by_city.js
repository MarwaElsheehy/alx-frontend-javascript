export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter(student => student.location === city)
    .map(student => {
      let grade = newGrades.filter(g => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}

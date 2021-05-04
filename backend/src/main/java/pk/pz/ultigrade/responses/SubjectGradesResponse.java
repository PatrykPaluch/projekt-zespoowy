package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import pk.pz.ultigrade.models.*;

import java.util.ArrayList;
import java.util.List;

public class SubjectGradesResponse {

    @JsonIgnore
    private final TeacherSubjectEntity teacherSubject;
    private final List<StudentGrades> studentGrades;

    public SubjectGradesResponse(List<GradesEntity> gradesEntityList){
        TeacherSubjectEntity teacherSubject = gradesEntityList.get(0).getTeacherSubject();
        this.teacherSubject = teacherSubject;

        List<StudentGrades> studentGrades = new ArrayList<StudentGrades>();
        for(GradesEntity gradeEntity : gradesEntityList){
            if(!teacherSubject.equals(gradeEntity.getTeacherSubject()))
                throw new IllegalArgumentException("There are grades from multiple subjects");

            StudentEntity subject = gradeEntity.getStudent();
            addToList(studentGrades, subject, gradeEntity);
        }

        this.studentGrades = studentGrades;
    }

    private static void addToList(List<StudentGrades> list, StudentEntity student, GradesEntity grade){
        for(StudentGrades subjectGrades : list){
            if(student.equals(subjectGrades.getStudentEntity())) {
                subjectGrades.addGrade(grade);
                return;
            }
        }
        StudentGrades newSubject = new StudentGrades(student);
        newSubject.addGrade(grade);
        list.add(newSubject);
    }

    public PublicUserResponse getTeacher(){
        return new PublicUserResponse(teacherSubject.getTeacher());
    }

    @JsonIgnoreProperties("teachers")
    public SubjectsEntity getSubject() {
        return teacherSubject.getSubject();
    }


    public List<StudentGrades> getStudentGrades() {
        return studentGrades;
    }

    public static class StudentGrades {

        private final StudentEntity student;
        @JsonIgnoreProperties({"student", "subject"})
        private final List<GradesEntity> grades;

        public StudentGrades(StudentEntity studentEntity){
            this.student = studentEntity;
            this.grades = new ArrayList<>();
        }

        protected void addGrade(GradesEntity grade){
            this.grades.add(grade);
        }

        @JsonIgnore
        protected StudentEntity getStudentEntity(){
            return student;
        }

        public PublicUserResponse getStudent(){
            return new PublicUserResponse(student);
        }

        public List<GradesEntity> getGrades(){
            return grades;
        }
    }
}

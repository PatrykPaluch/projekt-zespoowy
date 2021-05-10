package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import pk.pz.ultigrade.models.GradesEntity;
import pk.pz.ultigrade.models.StudentEntity;
import pk.pz.ultigrade.models.SubjectsEntity;
import pk.pz.ultigrade.models.TeacherSubjectEntity;

import java.util.ArrayList;
import java.util.List;
/*
{
    student: PublicUserResponse
    subjectGrades: [
        {
            teacher: PublicUserResponse
            subject: {id, name}
            grades: [{id, grade, date, description},]
        },
    ]
}
*/
public class StudentGradesResponse {

    @JsonIgnore
    private final PublicUserResponse student;
    private final List<SubjectGrades> studentGrades;

    public StudentGradesResponse(List<GradesEntity> gradesEntityList){

        StudentEntity student = gradesEntityList.get(0).getStudent();
        this.student = new PublicUserResponse(student);

        List<SubjectGrades> studentGrades = new ArrayList<SubjectGrades>();
        for(GradesEntity gradeEntity : gradesEntityList){
            if(!gradeEntity.getStudent().equals(student))
                throw new IllegalArgumentException("There are grades from multiple students");

            TeacherSubjectEntity subject = gradeEntity.getTeacherSubject();
            addToList(studentGrades, subject, gradeEntity);
        }

        this.studentGrades = studentGrades;
    }

    private static void addToList(List<SubjectGrades> list, TeacherSubjectEntity subject, GradesEntity grade){
        for(SubjectGrades subjectGrades : list){
            if(subject.equals(subjectGrades.getTeacherSubjectEntity())) {
                subjectGrades.addGrade(grade);
                return;
            }
        }
        SubjectGrades newSubject = new SubjectGrades(subject);
        newSubject.addGrade(grade);
        list.add(newSubject);
    }

    public PublicUserResponse getStudent(){
        return student;
    }

    public List<SubjectGrades> getStudentGrades() {
        return studentGrades;
    }

    public static class SubjectGrades {

        @JsonIgnoreProperties("teacher")
        private final TeacherSubjectEntity subject;
        @JsonIgnoreProperties({"student", "subject"})
        private final List<GradesEntity> grades;

        public SubjectGrades(TeacherSubjectEntity subjectsEntity){
            this.subject = subjectsEntity;
            this.grades = new ArrayList<>();
        }

        protected void addGrade(GradesEntity grade){
            this.grades.add(grade);
        }

        @JsonIgnore
        protected TeacherSubjectEntity getTeacherSubjectEntity(){
            return subject;
        }


        public PublicUserResponse getTeacher(){
            return new PublicUserResponse(subject.getTeacher());
        }

        @JsonIgnoreProperties("teachers")
        public SubjectsEntity getSubject(){
            return subject.getSubject();
        }

        public List<GradesEntity> getGrades(){
            return grades;
        }
    }

}

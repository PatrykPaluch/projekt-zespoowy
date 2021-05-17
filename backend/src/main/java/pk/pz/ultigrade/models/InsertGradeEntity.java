package pk.pz.ultigrade.models;


import pk.pz.ultigrade.requests.InsertGradeRequest;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "grades")
public class InsertGradeEntity {

    @Id
    @Column(name = "id_grade")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "id_student")
    private int idStudent;

    @Column(name = "id_teacher_subject")
    private int idTeacherSubject;

    @Column(name = "GRADE")
    private String grade;

    @Column(name = "date")
    private Date date;

    @Column(name = "description")
    private String description;

    public InsertGradeEntity() {}

    public InsertGradeEntity(int idStudent, int idTeacherSubject, String grade,  String description) {
        this.idStudent = idStudent;
        this.idTeacherSubject = idTeacherSubject;
        this.grade = grade;
        this.date = new Date(System.currentTimeMillis());
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(int idStudent) {
        this.idStudent = idStudent;
    }

    public int getIdTeacherSubject() {
        return idTeacherSubject;
    }

    public void setIdTeacherSubject(int idTeacherSubject) {
        this.idTeacherSubject = idTeacherSubject;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

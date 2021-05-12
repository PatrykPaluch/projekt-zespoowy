package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "grades")
public class GradesEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_grade", unique = true, nullable = false)
    private int idGrade;

    @Column
    private String grade;

    @Column
    private Date date;

    @Column
    private String description;

    @JsonIgnoreProperties("studentClass")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_student", referencedColumnName = "id_user", nullable = false)
    private StudentEntity student;


    @JsonProperty("subject")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_teacher_subject", referencedColumnName = "id_teacher_subject", nullable = false)
    private TeacherSubjectEntity teacherSubject;


    public int getIdGrade() {
        return idGrade;
    }

    public void setIdGrade(int id) {
        this.idGrade = id;
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

    public StudentEntity getStudent() {
        return student;
    }

    public void setStudent(StudentEntity student) {
        this.student = student;
    }

   public TeacherSubjectEntity getTeacherSubject() {
        return teacherSubject;
    }

    public void setTeacherSubject(TeacherSubjectEntity teacherSubject) {
        this.teacherSubject = teacherSubject;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GradesEntity that = (GradesEntity) o;
        return idGrade == that.idGrade;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idGrade);
    }
}

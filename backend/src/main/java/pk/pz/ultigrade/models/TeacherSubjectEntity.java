package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "teacher_subject", schema = "public", catalog = "d5qp4l763upedh")
public class TeacherSubjectEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_teacher_subject", unique = true, nullable = false)
    private int idTeacherSubject;

//    @Basic
//    @Column(name = "id_subject")
//    private int idSubject;
//    @Basic
//    @Column(name = "id_teacher")
//    private int idTeacher;

    @JsonIgnoreProperties("teachers")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_subject")
    private SubjectsEntity subject;
//
//
    @JsonIgnoreProperties("subjects")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_teacher")
    private TeacherEntity teacher;

//    @Id
//    @Column(name = "id_teacher_subject")
    public int getIdTeacherSubject() {
        return idTeacherSubject;
    }

    public void setIdTeacherSubject(int id) {
        this.idTeacherSubject = id;
    }

    public SubjectsEntity getSubject() {
        return subject;
    }

    public void setSubject(SubjectsEntity subject) {
        this.subject = subject;
    }

    public TeacherEntity getTeacher() {
        return teacher;
    }

    public void setTeacher(TeacherEntity teacher) {
        this.teacher = teacher;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherSubjectEntity that = (TeacherSubjectEntity) o;
        return idTeacherSubject == that.idTeacherSubject;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTeacherSubject);
    }
}

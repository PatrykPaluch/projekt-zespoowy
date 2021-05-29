package pk.pz.ultigrade.models;


import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "teacher_subject")
public class InsertTeacherSubjectEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_teacher_subject")
    private int id;


    @Column(name = "id_subject")
    private int idSubject;

    @Column(name = "id_teacher")
    private int idTeacher;


    public InsertTeacherSubjectEntity() {
    }

    public InsertTeacherSubjectEntity(int id, int idSubject, int idTeacher) {
        this.id = id;
        this.idSubject = idSubject;
        this.idTeacher = idTeacher;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdSubject() {
        return idSubject;
    }

    public void setIdSubject(int idSubject) {
        this.idSubject = idSubject;
    }

    public int getIdTeacher() {
        return idTeacher;
    }

    public void setIdTeacher(int idTeacher) {
        this.idTeacher = idTeacher;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InsertTeacherSubjectEntity that = (InsertTeacherSubjectEntity) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

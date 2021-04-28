package pk.pz.ultigrade.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "teacher_subject", schema = "public", catalog = "d5qp4l763upedh")
public class TeacherSubjectEntity {
    private int idTeacherSubject;

    @Id
    @Column(name = "id_teacher_subject")
    public int getIdTeacherSubject() {
        return idTeacherSubject;
    }

    public void setIdTeacherSubject(int idTeacherSubject) {
        this.idTeacherSubject = idTeacherSubject;
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

package pk.pz.ultigrade.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "class_student", schema = "public", catalog = "d5qp4l763upedh")
public class ClassStudentEntity {
    private int idClassStudent;

    @Id
    @Column(name = "id_class_student")
    public int getIdClassStudent() {
        return idClassStudent;
    }

    public void setIdClassStudent(int idClassStudent) {
        this.idClassStudent = idClassStudent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ClassStudentEntity that = (ClassStudentEntity) o;
        return idClassStudent == that.idClassStudent;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idClassStudent);
    }
}

package pk.pz.ultigrade.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "subjects", schema = "public", catalog = "d5qp4l763upedh")
public class SubjectsEntity {
    private int idSubject;
    private String subjectName;

    @Id
    @Column(name = "id_subject")
    public int getIdSubject() {
        return idSubject;
    }

    public void setIdSubject(int idSubject) {
        this.idSubject = idSubject;
    }

    @Basic
    @Column(name = "subject_name")
    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SubjectsEntity that = (SubjectsEntity) o;
        return idSubject == that.idSubject && Objects.equals(subjectName, that.subjectName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idSubject, subjectName);
    }
}

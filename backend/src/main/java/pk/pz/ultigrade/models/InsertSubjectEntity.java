package pk.pz.ultigrade.models;

import javax.persistence.*;

@Entity
@Table(name = "subjects")
public class InsertSubjectEntity {

    @Id
    @Column(name = "id_subject")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "subject_name")
    private String subjectName;

    public InsertSubjectEntity() {}

    public InsertSubjectEntity(String subjectName) {
        this.subjectName = subjectName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    @Override
    public String toString() {
        return "InsertSubjectEntity{" +
                "id=" + id +
                ", subjectName='" + subjectName + '\'' +
                '}';
    }
}

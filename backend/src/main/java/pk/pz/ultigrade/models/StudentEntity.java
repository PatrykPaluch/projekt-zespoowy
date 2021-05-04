package pk.pz.ultigrade.models;


import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@DiscriminatorValue("1")
public class StudentEntity extends UsersBaseEntity {

    @JsonIgnoreProperties("students")
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "class_student",
            joinColumns = {@JoinColumn(name = "id_student")},
            inverseJoinColumns = {@JoinColumn(name = "id_class")})
    private ClassesEntity studentClass;


    public StudentEntity(){}

    public ClassesEntity getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(ClassesEntity studentClass) {
        this.studentClass = studentClass;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentEntity that = (StudentEntity) o;
        return getIdUser() == that.getIdUser();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdUser());
    }
}

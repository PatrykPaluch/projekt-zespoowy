package pk.pz.ultigrade.models;


import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;

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
}

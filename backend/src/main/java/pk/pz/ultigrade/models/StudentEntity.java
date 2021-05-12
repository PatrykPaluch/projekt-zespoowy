package pk.pz.ultigrade.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

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

    @JsonIgnoreProperties("children")
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "parent_child",
            joinColumns = {@JoinColumn(name = "id_child")},
            inverseJoinColumns = {@JoinColumn(name = "id_parent")})
    private Set<ParentEntity> parents;

    public StudentEntity(){}

    public ClassesEntity getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(ClassesEntity studentClass) {
        this.studentClass = studentClass;
    }

    public Set<ParentEntity> getParents() {
        return parents;
    }

    public void setParents(Set<ParentEntity> parents) {
        this.parents = parents;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentEntity that = (StudentEntity) o;
        return getId() == that.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }


}

package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@DiscriminatorValue("2")
public class TeacherEntity extends UsersBaseEntity {

    @JsonIgnoreProperties("teachers")
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "teacher_subject",
            joinColumns = {@JoinColumn(name = "id_teacher")},
            inverseJoinColumns = {@JoinColumn(name = "id_subject")})
    private Set<TeacherSubjectEntity> subjects;

    public Set<TeacherSubjectEntity> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<TeacherSubjectEntity> subjects) {
        this.subjects = subjects;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherEntity that = (TeacherEntity) o;
        return getId() == that.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}

package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@DiscriminatorValue("3")
public class ParentEntity extends UsersBaseEntity {

    @JsonIgnoreProperties("parents")
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "parent_child",
            joinColumns = {@JoinColumn(name = "id_parent")},
            inverseJoinColumns = {@JoinColumn(name = "id_child")})
    private Set<StudentEntity> children;


    public Set<StudentEntity> getChildren() {
        return children;
    }

    public void setChildren(Set<StudentEntity> children) {
        this.children = children;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParentEntity that = (ParentEntity) o;
        return getId() == that.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }
}

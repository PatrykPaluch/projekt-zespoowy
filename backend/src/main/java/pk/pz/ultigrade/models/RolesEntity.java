package pk.pz.ultigrade.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "roles", schema = "public", catalog = "d5qp4l763upedh")
public class RolesEntity {
    private int idRole;
    private String role;

    @Id
    @Column(name = "id_role")
    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }

    @Basic
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RolesEntity that = (RolesEntity) o;
        return idRole == that.idRole && Objects.equals(role, that.role);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRole, role);
    }
}

package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import pk.pz.ultigrade.responses.PublicUserResponse;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "classes")
public class InsertClassEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_class")
    private int id;

    @Column
    private String name;
    @Column
    private String schoolYear;

    @JsonIgnoreProperties("subjects")
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_tutor")
    private TeacherEntity principal;

    public InsertClassEntity() {
    }

    public InsertClassEntity(String name, String schoolYear, TeacherEntity principal) {
        this.name = name;
        this.schoolYear = schoolYear;
        this.principal = principal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    @JsonIgnore
    public TeacherEntity getPrincipal() {
        return principal;
    }

    public void setPrincipal(TeacherEntity principal) {
        this.principal = principal;
    }

    @JsonProperty("principal")
    public PublicUserResponse getPrincipalUser(){
        return new PublicUserResponse(principal);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InsertClassEntity that = (InsertClassEntity) o;
        return id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

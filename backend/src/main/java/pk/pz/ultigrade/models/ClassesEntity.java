package pk.pz.ultigrade.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "classes", schema = "public", catalog = "d5qp4l763upedh")
public class ClassesEntity {
    private int idClass;
    private String name;
    private String schoolYear;

    @Id
    @Column(name = "id_class")
    public int getIdClass() {
        return idClass;
    }

    public void setIdClass(int idClass) {
        this.idClass = idClass;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "school_year")
    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ClassesEntity that = (ClassesEntity) o;
        return idClass == that.idClass && Objects.equals(name, that.name) && Objects.equals(schoolYear, that.schoolYear);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idClass, name, schoolYear);
    }
}

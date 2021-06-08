package pk.pz.ultigrade.responses;

import net.minidev.json.annotate.JsonIgnore;
import pk.pz.ultigrade.models.ClassesEntity;

import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class ClassResponseNoStudents {

    @JsonIgnore
    private final ClassesEntity classesEntity;

    public ClassResponseNoStudents(ClassesEntity classesEntity) {
        this.classesEntity = classesEntity;
    }

    public int getId() {
        return classesEntity.getId();
    }

    public String getName() {
        return classesEntity.getName();
    }

    public String getSchoolYear() {
        return classesEntity.getSchoolYear();
    }

    public PublicUserResponse getPrincipal() {
        return new PublicUserResponse(classesEntity.getPrincipal());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ClassResponseNoStudents that = (ClassResponseNoStudents) o;
        return Objects.equals(classesEntity, that.classesEntity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(classesEntity);
    }

}

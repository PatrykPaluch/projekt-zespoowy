package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import pk.pz.ultigrade.models.ClassesEntity;
import pk.pz.ultigrade.models.TeacherEntity;
import pk.pz.ultigrade.models.TimetableEntity;
import pk.pz.ultigrade.models.UsersBaseEntity;

import java.util.List;
import java.util.stream.Collectors;

public class TeacherOfClassResponse {
    @JsonProperty("class")
    @JsonIgnoreProperties({"principal", "timetable", "students"})
    private final ClassesEntity classesEntity;

    private final List<PublicUserResponse> teachers;

    public TeacherOfClassResponse(ClassesEntity classesEntity) {
        this.classesEntity = classesEntity;

        teachers = classesEntity.getTimetable().stream()
                .map(TimetableEntity::getTeacher)
                .map(PublicUserResponse::new)
                .collect(Collectors.toList());

    }

    public ClassesEntity getClassesEntity() {
        return classesEntity;
    }

    public List<PublicUserResponse> getTeachers() {
        return teachers;
    }
}

package pk.pz.ultigrade.responses;

import net.minidev.json.annotate.JsonIgnore;
import pk.pz.ultigrade.models.SubjectsEntity;
import pk.pz.ultigrade.models.TeacherEntity;
import pk.pz.ultigrade.models.TeacherSubjectEntity;

import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class TeacherSubjectResponse {

    @JsonIgnore
    private final TeacherSubjectEntity teacherSubjectEntity;

    public TeacherSubjectResponse(TeacherSubjectEntity teacherSubjectEntity) {
        this.teacherSubjectEntity = teacherSubjectEntity;
    }

    public int getId() {
        return teacherSubjectEntity.getIdTeacherSubject();
    }

    public SubjectsEntity getSubject() {
        return teacherSubjectEntity.getSubject();
    }

    public TeacherEntity getTeacher() {
        return teacherSubjectEntity.getTeacher();
    }

    public Set<ClassResponse> getClasses() {
        return teacherSubjectEntity.getClasses().stream().map(ClassResponse::new).collect(Collectors.toSet());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherSubjectResponse that = (TeacherSubjectResponse) o;
        return Objects.equals(teacherSubjectEntity, that.teacherSubjectEntity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(teacherSubjectEntity);
    }
}

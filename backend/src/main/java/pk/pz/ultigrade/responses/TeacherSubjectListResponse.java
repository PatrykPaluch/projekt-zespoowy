package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import pk.pz.ultigrade.models.TeacherSubjectEntity;

import java.util.List;

public class TeacherSubjectListResponse {

    @JsonIgnoreProperties("classes")
    private final List<TeacherSubjectEntity> teacherSubjects;

    public TeacherSubjectListResponse(List<TeacherSubjectEntity> teacherSubjects) {
        this.teacherSubjects = teacherSubjects;
    }

    public List<TeacherSubjectEntity> getTeacherSubjects() {
        return teacherSubjects;
    }
}

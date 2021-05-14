package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import pk.pz.ultigrade.models.TimetableEntity;

public class TimetableResponse {

    @JsonIgnore
    private final TimetableEntity timetable;

    public TimetableResponse(TimetableEntity timetable){
        this.timetable = timetable;
    }


    public int getId() {
        return timetable.getId();
    }

    public String getDayOfWeek() {
        return timetable.getDayOfWeek();
    }

    public String getTime() {
        return timetable.getTime();
    }

    @JsonIgnoreProperties("students")
    public ClassResponse getClasses() {
        return new ClassResponse(timetable.getClasses());
    }

    public TeacherSubjectResponse getTeacherSubject() {
        return new TeacherSubjectResponse(timetable.getTeacherSubject());
    }

}

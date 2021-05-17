package pk.pz.ultigrade.models;


import javax.persistence.*;

@Entity
@Table(name = "timetable")
public class InsertSubjectIntoCallendarEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_timetable")
    private int idTimetable;

    @Column(name = "id_class")
    private int idClass;

    @Column(name = "id_teacher_subject")
    private int idTeacherSubject;

    @Column(name = "day_of_week")
    private String dayOfWeek;

    @Column
    private String time;

    public InsertSubjectIntoCallendarEntity(){}

    public InsertSubjectIntoCallendarEntity(int idClass, int idTeacherSubject, String dayOfWeek, String time) {
        this.idClass = idClass;
        this.idTeacherSubject = idTeacherSubject;
        this.dayOfWeek = dayOfWeek;
        this.time = time;
    }

    public int getIdTimetable() {
        return idTimetable;
    }

    public void setIdTimetable(int idTimetable) {
        this.idTimetable = idTimetable;
    }

    public int getIdClass() {
        return idClass;
    }

    public void setIdClass(int idClass) {
        this.idClass = idClass;
    }

    public int getIdTeacherSubject() {
        return idTeacherSubject;
    }

    public void setIdTeacherSubject(int idTeacherSubject) {
        this.idTeacherSubject = idTeacherSubject;
    }

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}

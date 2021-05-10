package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "timetable", schema = "public", catalog = "d5qp4l763upedh")
public class TimetableEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_timetable")
    private int id;

    @Column
    private String dayOfWeek;

    @Column
    private String time;

    @JsonIgnoreProperties("students")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_class")
    private ClassesEntity classes;


    @ManyToOne
    @JoinColumn(name = "id_teacher_subject")
    private TeacherSubjectEntity teacherSubject;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public ClassesEntity getClasses() {
        return classes;
    }

    public void setClasses(ClassesEntity classes) {
        this.classes = classes;
    }

    public UsersBaseEntity getTeacher() {
        return teacherSubject.getTeacher();
    }

    @JsonIgnoreProperties("teachers")
    public SubjectsEntity getSubject() {
        return teacherSubject.getSubject();
    }

}

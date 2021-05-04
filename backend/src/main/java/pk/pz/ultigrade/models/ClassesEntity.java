package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "classes")
public class ClassesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_class")
    private int id;

    @Column
    private String name;
    @Column
    private String schoolYear;


    @JsonIgnoreProperties("studentClass")
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "class_student",
            joinColumns = {@JoinColumn(name = "id_class")},
            inverseJoinColumns = {@JoinColumn(name = "id_student")})
    private Set<StudentEntity> students;


    @JsonIgnoreProperties("subjects")
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_tutor")
    private TeacherEntity principal;

    @JsonIgnoreProperties("classes")
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn( name = "id_class" )
    private Set<TimetableEntity> timetable;

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

    public Set<StudentEntity> getStudents() {
        return students;
    }

    public void setStudents(Set<StudentEntity> students) {
        this.students = students;
    }

    public TeacherEntity getPrincipal() {
        return principal;
    }

    public void setPrincipal(TeacherEntity principal) {
        this.principal = principal;
    }

    public Set<TimetableEntity> getTimetable() {
        return timetable;
    }

    public void setTimetable(Set<TimetableEntity> timetable) {
        this.timetable = timetable;
    }
}

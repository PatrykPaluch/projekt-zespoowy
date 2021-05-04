package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "teacher_subject", schema = "public", catalog = "d5qp4l763upedh")
public class TeacherSubjectEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_teacher_subject", unique = true, nullable = false)
    private int idTeacherSubject;

    @JsonIgnoreProperties("teachers")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_subject")
    private SubjectsEntity subject;

    @JsonIgnoreProperties("subjects")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_teacher")
    private TeacherEntity teacher;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "timetable",
            joinColumns = {@JoinColumn(name = "id_teacher_subject")},
            inverseJoinColumns = {@JoinColumn(name = "id_class")})
    private Set<ClassesEntity> classes;


    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_teacher_subject")
    private Set<TimetableEntity> timetable;

    public int getIdTeacherSubject() {
        return idTeacherSubject;
    }

    public void setIdTeacherSubject(int id) {
        this.idTeacherSubject = id;
    }

    public SubjectsEntity getSubject() {
        return subject;
    }

    public void setSubject(SubjectsEntity subject) {
        this.subject = subject;
    }

    public TeacherEntity getTeacher() {
        return teacher;
    }

    public void setTeacher(TeacherEntity teacher) {
        this.teacher = teacher;
    }

    public Set<ClassesEntity> getClasses() {
        return classes;
    }

    public void setClasses(Set<ClassesEntity> classes) {
        this.classes = classes;
    }

    public Set<TimetableEntity> getTimetable() {
        return timetable;
    }

    public void setTimetable(Set<TimetableEntity> timetable) {
        this.timetable = timetable;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TeacherSubjectEntity that = (TeacherSubjectEntity) o;
        return idTeacherSubject == that.idTeacherSubject;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idTeacherSubject);
    }
}

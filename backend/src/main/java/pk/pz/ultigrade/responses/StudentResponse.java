package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import net.minidev.json.annotate.JsonIgnore;
import pk.pz.ultigrade.models.RoleEntity;
import pk.pz.ultigrade.models.StudentEntity;

import java.sql.Date;

public class StudentResponse {
    @JsonIgnore
    private StudentEntity studentEntity;

    public StudentResponse(StudentEntity studentEntity) {
        this.studentEntity = studentEntity;
    }


    public int getId() {
        return studentEntity.getId();
    }

    public RoleEntity getRole() {
        return studentEntity.getRole();
    }

    public String getName() {
        return studentEntity.getName();
    }

    public String getSurname() {
        return studentEntity.getSurname();
    }

    public String getPesel() {
        return studentEntity.getPesel();
    }

    public String getAddress() {
        return studentEntity.getAdress();
    }

    public String getPhone() {
        return studentEntity.getPhone();
    }

    public Date getBirthDate() {
        return studentEntity.getBirthDate();
    }

    @JsonProperty("class")
    public ClassResponseNoStudents getStudentClass(){
        return new ClassResponseNoStudents(studentEntity.getStudentClass());
    }
}

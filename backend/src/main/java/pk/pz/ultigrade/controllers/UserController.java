package pk.pz.ultigrade.controllers;

import net.minidev.json.annotate.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.ClassesEntity;
import pk.pz.ultigrade.models.RoleEntity;
import pk.pz.ultigrade.models.StudentEntity;
import pk.pz.ultigrade.repositories.ClassesEntityRepository;
import pk.pz.ultigrade.repositories.StudentEntityRepository;

import java.util.Optional;

@RestController
public class UserController {


    public class Student {
        @JsonIgnore
        private StudentEntity student;

        public Student(StudentEntity student){
            this.student = student;
        }

        public Integer getId() {
            return student.getId();
        }

        public RoleEntity getRole() {
            return student.getRole();
        }

        public String getName() {
            return student.getName();
        }

        public String getSurname() {
            return student.getSurname();
        }

        public String getLogin() {
            return student.getLogin();
        }

        public String getPassword() {
            return student.getPassword();
        }

        public String getPesel() {
            return student.getPesel();
        }

        public String getAdress() {
            return student.getAdress();
        }

        public String getPhone() {
            return student.getPhone();
        }

        public String getEmail() {
            return student.getEmail();
        }

        public StudentClass getStudentClass() {
            return new StudentClass(student.getStudentClass());
        }
    }

    public class StudentClass {
        @JsonIgnore
        private ClassesEntity classesEntity;

        public StudentClass(ClassesEntity classesEntity){
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
    }

    @Autowired
    StudentEntityRepository userRepo;

    @Autowired
    ClassesEntityRepository classesRepo;

    @GetMapping("/public/users/{id}")
    public StudentEntity getUser(@PathVariable int id){
        Optional<StudentEntity> user = userRepo.findById(id);
        if(user.isPresent())
            return user.get();

        throw new ResourceNotFoundException();
    }


    @GetMapping("/public/classes/{id}")
    public ClassesEntity getClass(@PathVariable int id){
        Optional<ClassesEntity> klass = classesRepo.findById(id);
        if(klass.isPresent())
            return klass.get();

        throw new ResourceNotFoundException();
    }

}

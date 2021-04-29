package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.*;
import pk.pz.ultigrade.repositories.ClassesEntityRepository;
import pk.pz.ultigrade.repositories.StudentEntityRepository;
import pk.pz.ultigrade.repositories.TeacherEntityRepository;
import pk.pz.ultigrade.repositories.UserEntityRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {


    @Autowired
    UserEntityRepository userRepo;

    @Autowired
    StudentEntityRepository studentRepo;

    @Autowired
    ClassesEntityRepository classesRepo;

    @Autowired
    TeacherEntityRepository teacherRepo;

    // get all users
    @GetMapping("/api/users")
    public List<UsersEntity> getUsers(){
        return userRepo.findAll();
    }
    // get all students
    @GetMapping("/api/students")
    public List<StudentEntity> getStudents(){
        return studentRepo.findAll();
    }

    // get all teachers
    @GetMapping("/api/teachers")
    public List<TeacherEntity> getTeachers(){
        return teacherRepo.findAll();
    }

    @GetMapping("/public/students/{id}")
    public StudentEntity getStudent(@PathVariable int id){
        Optional<StudentEntity> user = studentRepo.findByIdUser(id);
        if(user.isPresent())
            return user.get();

        throw new ResourceNotFoundException();
    }

    @GetMapping("/public/users/{id}")
    public UsersBaseEntity getUser(@PathVariable int id){
        Optional<UsersEntity> user = userRepo.findByIdUser(id);
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

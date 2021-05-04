package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.ClassesEntity;
import pk.pz.ultigrade.models.StudentEntity;
import pk.pz.ultigrade.models.UsersBaseEntity;
import pk.pz.ultigrade.repositories.*;
import pk.pz.ultigrade.responses.StudentGradesResponse;
import pk.pz.ultigrade.util.JsonResponse;
import pk.pz.ultigrade.util.OptionalEntityResponse;

import javax.servlet.http.HttpServletRequest;

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

    @Autowired
    GradesEntityRepository gradesRepo;

    // get all users
    @GetMapping("/api/users")
    public JsonResponse.Wrapper<?> getUsers(){
        return JsonResponse.listObject(userRepo.findAll());
    }
    // get all students
    @GetMapping("/api/students")
    public JsonResponse.Wrapper<?> getStudents(){
        return JsonResponse.listObject(studentRepo.findAll());
    }

    // get all teachers
    @GetMapping("/api/teachers")
    public JsonResponse.Wrapper<?> getTeachers(){
        return JsonResponse.listObject(teacherRepo.findAll());
    }

    @GetMapping("/api/students/{id}")
    public StudentEntity getStudent(@PathVariable int id){
        return OptionalEntityResponse.get(studentRepo.findByIdUser(id));
    }

    @GetMapping("/api/students/{id}/grades")
    public StudentGradesResponse getStudentGrades(@PathVariable int id){
        return new StudentGradesResponse(gradesRepo.findByStudent_idUser(id));
    }

    @GetMapping("/api/users/{id}")
    public UsersBaseEntity getUser(@PathVariable int id){
        return OptionalEntityResponse.get(userRepo.findByIdUser(id));
    }


    @GetMapping("/api/classes/{id}")
    public ClassesEntity getClass(@PathVariable int id){
        return OptionalEntityResponse.get(classesRepo.findById(id));
    }

}

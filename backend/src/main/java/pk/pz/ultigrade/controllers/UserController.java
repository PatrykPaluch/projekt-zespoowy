package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.details.UserDetailsImpl;
import pk.pz.ultigrade.models.ClassesEntity;
import pk.pz.ultigrade.models.GradesEntity;
import pk.pz.ultigrade.models.StudentEntity;
import pk.pz.ultigrade.repositories.*;
import pk.pz.ultigrade.responses.ClassResponse;
import pk.pz.ultigrade.responses.PublicUserResponse;
import pk.pz.ultigrade.responses.StudentGradesResponse;
import pk.pz.ultigrade.responses.TeacherOfClassResponse;
import pk.pz.ultigrade.security.AccessCheck;
import pk.pz.ultigrade.util.JsonResponse;
import pk.pz.ultigrade.util.Roles;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
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
    public Object getUsers(Authentication auth){
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("you are not admin!");

        return JsonResponse.listObject(userRepo.findAll());
    }

    @GetMapping("/api/students/{id}")
    public Object getStudent(@PathVariable int id, Authentication auth){
        if(!AccessCheck.getStudent(auth,id)){
            return JsonResponse.unauthorized("no permissions!");
        }

        Optional<StudentEntity> student = studentRepo.findById(id);
        if(student.isEmpty()){
            return JsonResponse.notFound("user with {" + id + "} not found");
        }

        return student;
    }



    @GetMapping("/api/parents")
    public Object getStudentParents(Authentication auth){
        UserDetailsImpl userDetails = AccessCheck.userDetails(auth);
        System.out.println(userDetails.getUser().getClass());

        if(userDetails.getRole().getId() != Roles.STUDENT.getNumVal()){
            return JsonResponse.badRequest("you are not a student!");
        }
        return JsonResponse.listObject(userDetails.studentGetParents());
    }

    @GetMapping("/api/students/{id}/grades")
    public Object getStudentGrades(@PathVariable int id, Authentication auth){
        if(!AccessCheck.getStudentGrades(auth,id)){
            return JsonResponse.unauthorized("no permissions!");
        }

        List<GradesEntity> gradesEntityList = gradesRepo.findByStudent_id(id);
        if(gradesEntityList.isEmpty()){

            return JsonResponse.notFound("brak ocen!");
        }

        return new StudentGradesResponse(gradesRepo.findByStudent_id(id));
    }

    @GetMapping("/api/@me")
    public Object getUserMe(Authentication auth){
        if(auth.isAuthenticated())
            return new PublicUserResponse(AccessCheck.userDetails(auth).getUser());
        return JsonResponse.forbidden("you are not logged in!");
    }


    @GetMapping("/api/students/{id}/teachers")
    public Object getStudentTeachers(@PathVariable int id, Authentication auth){
        if(!AccessCheck.getStudent(auth,id))
            return JsonResponse.unauthorized("you are not a student!");

        Optional<ClassesEntity> classesEntity = classesRepo.findByStudents_Id(id);
        if(classesEntity.isEmpty())
            return JsonResponse.notFound("no classes for this user!");

        return new TeacherOfClassResponse(classesEntity.get());

    }


    @GetMapping("/api/classes/{id}")
    public Object getClass(@PathVariable int id, Authentication auth){
        if(!AccessCheck.getClass(auth,id))
            return JsonResponse.unauthorized("this user is not in this class!");


        Optional<ClassesEntity> classesEntity = classesRepo.findById(id);
        if(classesEntity.isEmpty())
            return JsonResponse.notFound("no classes for this user!");

        return new ClassResponse(classesEntity.get());
    }

}

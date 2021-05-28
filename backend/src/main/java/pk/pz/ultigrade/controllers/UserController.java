package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.details.UserDetailsImpl;
import pk.pz.ultigrade.models.*;
import pk.pz.ultigrade.repositories.*;
import pk.pz.ultigrade.requests.InsertClassRequest;
import pk.pz.ultigrade.requests.InsertGradeRequest;
import pk.pz.ultigrade.requests.InsertParentToStudentRequest;
import pk.pz.ultigrade.requests.InsertUsersRequest;
import pk.pz.ultigrade.responses.*;
import pk.pz.ultigrade.security.AccessCheck;
import pk.pz.ultigrade.util.JsonResponse;
import pk.pz.ultigrade.util.Roles;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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
    ParentEntityRepository parentRepo;

    @Autowired
    SpecificSubjectEntityRepository specificSubjectEntityRepo;

    @Autowired
    GradesEntityRepository gradesRepo;

    @Autowired
    InsertGradesEntityRepository insertGradesRepo;

    @Autowired
    InsertParentToStudentRepository insertParentRepo;

    @Autowired
    InsertClassEntityRepository insertClassRepo;

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

    @GetMapping("/api/children")
    public Object getParentChildren(Authentication auth){
        UserDetailsImpl userDetails = AccessCheck.userDetails(auth);

        if(userDetails.isParent()){
            return JsonResponse.badRequest("you are not a parent!");
        }
        return JsonResponse.listObject(userDetails.parentGetChildren());
    }

    @GetMapping("/api/parents")
    public Object getStudentParents(Authentication auth){
        UserDetailsImpl userDetails = AccessCheck.userDetails(auth);

        if(userDetails.getRole().getId() != Roles.STUDENT.getNumVal()){
            return JsonResponse.badRequest("you are not a student!");
        }
        return JsonResponse.listObject(userDetails.studentGetParents());
    }

    @GetMapping("/api/parents/{id}/children")
    public Object getParentChildren(@PathVariable int id, Authentication auth){
        List<StudentEntity> children = studentRepo.findByParents_Id(id);
        if(children.isEmpty())
            return JsonResponse.notFound("this parent has no children");


        return JsonResponse.listObject(children.stream().map(PublicUserResponse::new).collect(Collectors.toList()));
    }

    @PostMapping({"/api/students/{id}/parents"})
    public Object addParentToStudent(@PathVariable int id, @RequestBody InsertParentToStudentRequest request, Authentication auth){
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("no permission");

        return addStudentToParentInternal(id, request.getUserId());
    }

    @PostMapping({"/api/parents/{id}/children"})
    public Object addStudentToParent(@PathVariable int id, @RequestBody InsertParentToStudentRequest request, Authentication auth){
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("no permission");


        return addStudentToParentInternal(request.getUserId(), id);
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

    @PostMapping("/api/students/{id}/grades")
    public Object addStudentGrade(@PathVariable int id, @RequestBody InsertGradeRequest gradeRequest, Authentication auth){
        Optional<TeacherSubjectEntity> teacherSubject = specificSubjectEntityRepo.findByTeacher_IdAndSubject_Id(
                gradeRequest.getIdTeacher(),
                gradeRequest.getIdSubject());

        if(teacherSubject.isEmpty())
            return JsonResponse.badRequest("no subject for this teacher");


        InsertGradeEntity grade = new InsertGradeEntity(
                id,
                teacherSubject.get().getIdTeacherSubject(),
                gradeRequest.getGrade(),
                gradeRequest.getDescription()
            );

        insertGradesRepo.save(grade);
        return grade;
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

    @PostMapping("/api/classes")
    public Object createClass(@RequestBody InsertClassRequest classRequest, Authentication auth){
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("You are not an admin");

        Optional<TeacherEntity> teacherEntity = teacherRepo.findById(classRequest.getIdTutor());
        if(teacherEntity.isEmpty())
            return JsonResponse.notFound("Teacher not found");

        InsertClassEntity classEntity = new InsertClassEntity(
                classRequest.getName(),
                classRequest.getSchoolYear(),
                teacherEntity.get()
        );


        try {
            return insertClassRepo.save(classEntity);
        }
        catch (DataAccessException er) {
            return JsonResponse.badRequest("cannot insert data");
        }
    }


    @PostMapping("/api/classes/{classId}/students")
    public Object addUsersToClass(@PathVariable int classId, @RequestBody InsertUsersRequest usersRequest, Authentication auth){
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("You are not an admin");

        Optional<ClassesEntity> opClassEntity = classesRepo.findById(classId);
        if(opClassEntity.isEmpty())
            return JsonResponse.notFound("no class with this id");

        ClassesEntity classEntity = opClassEntity.get();

        List<StudentEntity> students = studentRepo.findAllById( usersRequest.getUserIds() );

        students = students
                .stream()
                .filter(st -> !classEntity.getStudents().contains(st))
                .collect(Collectors.toList());

        if(students.size() == 0)
            return JsonResponse.notFound("no new students found");

        classEntity.getStudents().addAll(students);

        try {
            classesRepo.save(classEntity);
            return JsonResponse.listObject(students.stream().map(PublicUserResponse::new).collect(Collectors.toList()));
        }
        catch (DataAccessException er){
            return JsonResponse.badRequest("cannot insert data");
        }
    }

    @GetMapping("/api/students/{id}/parents")
    public Object getStudentParents(@PathVariable int id, Authentication auth){
        UserDetailsImpl userDetails =  AccessCheck.userDetails(auth);

        if(! (AccessCheck.isSelfOrAdmin(userDetails,id) || userDetails.isTeacher()))
            return JsonResponse.unauthorized("no permissions!");


        List<ParentEntity> parents = parentRepo.findByChildren_Id(id);

        if(parents.isEmpty())
            return JsonResponse.notFound("this student does not have parents :( ");

        return parents.stream().map(PublicUserResponse::new).collect(Collectors.toList());

    }

    @GetMapping("/api/teapot")
    public ResponseEntity<?> iAmTeapot(){
        return JsonResponse.imATeapot();
    }

    // ===============================================
    private Object addStudentToParentInternal(int studentId, int parentId) {

        InsertParentToStudentEntity entity = new InsertParentToStudentEntity(studentId, parentId);

        Optional<StudentEntity> student = studentRepo.findById(studentId);
        Optional<ParentEntity> parent = parentRepo.findById(parentId);

        if (student.isEmpty() || parent.isEmpty())
            return JsonResponse.badRequest("this student or parent do not exists");

        try {
            insertParentRepo.save(entity);
            return new InsertParentToStudentResponse(student.get(), parent.get());
        } catch (DataAccessException er) {
            return JsonResponse.badRequest("cannot insert data");
        }
    }

}

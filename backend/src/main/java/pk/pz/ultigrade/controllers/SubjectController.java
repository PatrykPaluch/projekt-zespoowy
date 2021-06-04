package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.models.*;
import pk.pz.ultigrade.repositories.*;
import pk.pz.ultigrade.requests.InsertSubjectRequest;
import pk.pz.ultigrade.requests.InsertTeacherSubjectRequest;
import pk.pz.ultigrade.responses.SubjectGradesResponse;
import pk.pz.ultigrade.responses.TeacherSubjectListResponse;
import pk.pz.ultigrade.responses.TeacherSubjectResponse;
import pk.pz.ultigrade.security.AccessCheck;
import pk.pz.ultigrade.util.JsonResponse;
import pk.pz.ultigrade.util.OptionalEntityResponse;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class SubjectController {

    @Autowired
    private SubjectEntityRepository subjectRepo;

    @Autowired
    private SpecificSubjectEntityRepository specSubjectRepo;

    @Autowired
    GradesEntityRepository gradesRepo;

    @Autowired
    InsertSubjectEntityRepository insertSubjectRepo;

    @Autowired
    InsertTeacherSubjectEntityRepository insertTeacherSubjectEntityRepo;

    @Autowired
    TeacherEntityRepository teacherRepo;


    @GetMapping("/api/subjects")
    public JsonResponse.Wrapper<SubjectsEntity> getSubjects(){
        return JsonResponse.listObject(subjectRepo.findAll());
    }

    @GetMapping("/api/subjects/{id}")
    public Object getSubjectsById(@PathVariable int id){
        return OptionalEntityResponse.get(subjectRepo.findById(id));
    }

    @GetMapping({
            "/api/subjects/{idSubject}/teachers/{idTeacher}/grades",
            "/api/teachers/{idTeacher}/subjects/{idSubject}/grades"
    })
    public Object getGrades(@PathVariable int idSubject, @PathVariable int idTeacher, Authentication auth){
        if(AccessCheck.getTeacherSubjectGrades(auth,idTeacher,idSubject)){
            return JsonResponse.unauthorized("no permissions!");
        }

        List<GradesEntity> grades = gradesRepo.findByTeacherSubject_Teacher_IdAndTeacherSubject_Subject_id(idTeacher, idSubject);
        if(grades.isEmpty()){
            return JsonResponse.notFound("No grades for this (subject, teacher) pair");
        }

        return new SubjectGradesResponse(grades);

    }

    @GetMapping({
            "/api/subjects/{idSubject}/teachers/{idTeacher}",
            "/api/teachers/{idTeacher}/subjects/{idSubject}"
    })
    public Object getTeacherSubject(@PathVariable int idSubject, @PathVariable int idTeacher, Authentication auth){
        Optional<TeacherSubjectEntity> entity = specSubjectRepo.findByTeacher_IdAndSubject_Id(idTeacher, idSubject);
        if(entity.isEmpty()){
            return JsonResponse.notFound("no teacher-subject for this subject and teacher");
        }
        return entity;
    }

    @GetMapping({"/api/subjects/{idSubject}/teacherSubject"})
    public Object getTeacherSubjectsForSubject(@PathVariable int idSubject){
        List<TeacherSubjectEntity> subjects = specSubjectRepo.findBySubject_Id(idSubject);
        if(subjects.isEmpty())
            return JsonResponse.notFound("No teacher-subject for this subject");

        return new TeacherSubjectListResponse(subjects);
    }


    @GetMapping({"/api/teachers/{idTeacher}/teacherSubject"})
    public Object getTeacherSubjectsForTeacher(@PathVariable int idTeacher){
        List<TeacherSubjectEntity> subjects = specSubjectRepo.findByTeacher_Id(idTeacher);
        if(subjects.isEmpty())
            return JsonResponse.notFound("No teacher-subject for this teacher");

        return new TeacherSubjectListResponse(subjects);
    }

    @PostMapping("/api/subjects")
    public Object addSubject(@RequestBody InsertSubjectRequest request, Authentication auth){
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("you are not an admin!");

        InsertSubjectEntity insertSubjectEntity = new InsertSubjectEntity(request.getSubjectName());

        try {
            return insertSubjectRepo.save(insertSubjectEntity);
        }
        catch (DataAccessException er){
            er.printStackTrace();
            return JsonResponse.badRequest("Data integrity error");
        }

    }

    @PostMapping("/api/teachersubject")
    public Object addTeacherSubject(@RequestBody InsertTeacherSubjectRequest request, Authentication auth) {
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("you are not an admin!");

        Optional<TeacherSubjectEntity> tse = specSubjectRepo.findByTeacher_IdAndSubject_Id(
                request.getTeacherId(),
                request.getSubjectId());

        if(tse.isPresent())
            return JsonResponse.badRequest("This teacher-subject already exists");

        Optional<TeacherEntity> teacher = teacherRepo.findById(request.getTeacherId());

        if(teacher.isEmpty())
            return JsonResponse.notFound("There is no teacher with this id");

        Optional<SubjectsEntity> subject = subjectRepo.findById(request.getSubjectId());

        if(subject.isEmpty())
            return JsonResponse.notFound("There is no subject with this id");


        InsertTeacherSubjectEntity insertTeacherSubjectEntity = new InsertTeacherSubjectEntity();
        insertTeacherSubjectEntity.setIdSubject(request.getSubjectId());
        insertTeacherSubjectEntity.setIdTeacher(request.getTeacherId());

        try {
            insertTeacherSubjectEntity = insertTeacherSubjectEntityRepo.save(insertTeacherSubjectEntity);
            Optional<TeacherSubjectEntity> effect = specSubjectRepo.findById(insertTeacherSubjectEntity.getId());
            if(effect.isPresent())
                return new TeacherSubjectResponse(effect.get());

            // this should not happen
            return insertTeacherSubjectEntity;
        }
        catch (DataAccessException er){
            return JsonResponse.badRequest("cannot insert data");
        }

    }
}

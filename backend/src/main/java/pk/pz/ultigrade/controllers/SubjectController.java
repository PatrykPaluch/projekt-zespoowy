package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.GradesEntity;
import pk.pz.ultigrade.models.SubjectsEntity;
import pk.pz.ultigrade.models.TeacherSubjectEntity;
import pk.pz.ultigrade.repositories.GradesEntityRepository;
import pk.pz.ultigrade.repositories.SpecificSubjectEntityRepository;
import pk.pz.ultigrade.repositories.SubjectEntityRepository;
import pk.pz.ultigrade.responses.SubjectGradesResponse;
import pk.pz.ultigrade.responses.TeacherSubjectListResponse;
import pk.pz.ultigrade.security.AccessCheck;
import pk.pz.ultigrade.util.JsonResponse;
import pk.pz.ultigrade.util.OptionalEntityResponse;

import java.util.List;
import java.util.Optional;

@RestController
public class SubjectController {

    @Autowired
    private SubjectEntityRepository subjectRepo;

    @Autowired
    private SpecificSubjectEntityRepository specSubjectRepo;

    @Autowired
    GradesEntityRepository gradesRepo;

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

}

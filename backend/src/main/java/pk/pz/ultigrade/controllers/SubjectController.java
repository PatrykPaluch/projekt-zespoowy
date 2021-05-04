package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.GradesEntity;
import pk.pz.ultigrade.models.SubjectsEntity;
import pk.pz.ultigrade.repositories.GradesEntityRepository;
import pk.pz.ultigrade.repositories.SubjectEntityRepository;
import pk.pz.ultigrade.responses.SubjectGradesResponse;
import pk.pz.ultigrade.util.JsonResponse;

import java.util.List;
import java.util.Optional;

@RestController
public class SubjectController {

    @Autowired
    private SubjectEntityRepository subjectRepo;

    @Autowired
    GradesEntityRepository gradesRepo;

    @GetMapping("/api/subjects")
    public List<SubjectsEntity> getSubjects(){
        return subjectRepo.findAll();
    }

    @GetMapping("/api/subjects/{id}")
    public Optional<SubjectsEntity> getSubjectsById(@PathVariable int id){
        return subjectRepo.findById(id);
    }

    @GetMapping({
            "/api/subjects/{idSubject}/teachers/{idTeacher}",
            "/api/teachers/{idTeacher}/subjects/{idSubject}"
    })
    public Object getGrades(@PathVariable int idSubject, @PathVariable int idTeacher){
        List<GradesEntity> grades = gradesRepo.findByTeacherSubject_Teacher_IdUserAndTeacherSubject_Subject_id(idTeacher, idSubject);
        if(grades.size() != 0)
            return new SubjectGradesResponse(grades);

        return JsonResponse.notFound("No grades for this (subject, teacher) pair");
    }

//    @GetMapping("/api/specificSubject/")
//    public Op
}

package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.SubjectsEntity;
import pk.pz.ultigrade.repositories.SubjectEntityRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class SubjectController {

    @Autowired
    private SubjectEntityRepository subjectRepo;

    @GetMapping("/api/subjects")
    public List<SubjectsEntity> getSubjects(){
        return subjectRepo.findAll();
    }

    @GetMapping("/api/subjects/{id}")
    public Optional<SubjectsEntity> getSubjectsById(@PathVariable int id){
        return subjectRepo.findById(id);
    }


//    @GetMapping("/api/specificSubject/")
//    public Op
}

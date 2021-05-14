package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.TimetableEntity;
import pk.pz.ultigrade.repositories.TimetableRepository;
import pk.pz.ultigrade.responses.TimetableResponse;
import pk.pz.ultigrade.util.JsonResponse;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class TimetableController {

    @Autowired
    private TimetableRepository timetableRepo;

    @GetMapping("/api/classes/{id}/timetable")
    public Object getTimetableFoClass(@PathVariable int id){
        List<TimetableEntity> timetable = timetableRepo.findByClasses_Id(id);

        return toTimetableResponse(timetable);
    }

    @GetMapping("/api/teachers/{id}/timetable")
    public Object getTimetableFoTeacher(@PathVariable int id){
        List<TimetableEntity> timetable = timetableRepo.findByTeacherSubject_Teacher_Id(id);

        return toTimetableResponse(timetable);
    }


    private Object toTimetableResponse(List<TimetableEntity> timetableEntities){
        return JsonResponse.listObject(
                timetableEntities
                        .stream()
                        .map(TimetableResponse::new)
                        .collect(Collectors.toList())
        );
    }

}

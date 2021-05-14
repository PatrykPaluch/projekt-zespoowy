package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.models.InsertSubjectIntoCallendarEntity;
import pk.pz.ultigrade.models.TimetableEntity;
import pk.pz.ultigrade.repositories.InsertSubjectIntoCallendarEntityRepository;
import pk.pz.ultigrade.repositories.TimetableRepository;
import pk.pz.ultigrade.requests.InsertSubjectIntoCallendarRequest;
import pk.pz.ultigrade.responses.TimetableResponse;
import pk.pz.ultigrade.security.AccessCheck;
import pk.pz.ultigrade.util.JsonResponse;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class TimetableController {

    @Autowired
    private TimetableRepository timetableRepo;

    @Autowired
    InsertSubjectIntoCallendarEntityRepository insertSubjectRepo;

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


    @PostMapping("/api/classes/{id}/timetable")
    public Object addSubject(@PathVariable int id, @RequestBody InsertSubjectIntoCallendarRequest request, Authentication auth){
        if(!AccessCheck.isAdmin(auth))
            return JsonResponse.unauthorized("you are not an admin!");

        InsertSubjectIntoCallendarEntity insertSubjectIntoCallendarEntity = new InsertSubjectIntoCallendarEntity(
                id,
                request.getIdTeacherSubject(),
                request.getDay(),
                request.getTime()
        );

        try {
            return insertSubjectRepo.save(insertSubjectIntoCallendarEntity);
        }
        catch (DataAccessException er){
            er.printStackTrace();
            return JsonResponse.badRequest("Data integrity error");
        }
    }


}

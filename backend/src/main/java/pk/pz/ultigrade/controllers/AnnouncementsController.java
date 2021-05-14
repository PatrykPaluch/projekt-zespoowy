package pk.pz.ultigrade.controllers;

import com.sun.istack.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.details.UserDetailsImpl;
import pk.pz.ultigrade.models.*;
import pk.pz.ultigrade.repositories.*;
import pk.pz.ultigrade.requests.AdditionalRequest;
import pk.pz.ultigrade.requests.AnnouncementsRequest;
import pk.pz.ultigrade.responses.TeacherSubjectResponse;
import pk.pz.ultigrade.security.AccessCheck;
import pk.pz.ultigrade.util.JsonResponse;
import pk.pz.ultigrade.util.Roles;

import javax.persistence.GeneratedValue;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:3000")
public class AnnouncementsController {

    @Autowired
    private AnnouncementsEntityRepository annoRepo;

    @Autowired
    private SpecificSubjectEntityRepository teacherSubjectRepo;

    @Autowired
    private UserEntityRepository userRepo;

    @Autowired
    private ClassesEntityRepository classRepo;

    @Autowired
    private AdditionalEntityRepository additionalRepo;

    @GetMapping("/api/announcements")
    public Object getAnnouncements(){
        List<AnnouncementsEntity> list = annoRepo.findByAdditionalIsNull();

        return JsonResponse.listObject(list);
    }

    @GetMapping("/api/announcements/class")
    public Object getAnnouncementsClass(Authentication auth){
        UserDetailsImpl userDetails = AccessCheck.userDetails(auth);
        if(userDetails == null)
            return JsonResponse.forbidden("This message should never be send. But i implemented null check because of IntelliJs big yellow warning about NullReferenceException...");

        List<Integer> ids;
        if(userDetails.isTeacher()) {
            List<TeacherSubjectEntity> subjects = teacherSubjectRepo.findByTeacher_Id(userDetails.getIdUser());
            ids = subjects
                    .stream()
                    .flatMap(ts -> ts.getClasses().stream())
                    .map(ClassesEntity::getId)
                    .collect(Collectors.toList());
        }
        else if(userDetails.isStudent()) {
            ids = new ArrayList<>();
            ids.add(userDetails.studentGetClass().getId());
        }
        else if(userDetails.isAdmin()){
            // for "public" (non class) announcements use getAnnouncements()
            return JsonResponse.listObject(annoRepo.findByAdditionalIsNotNull());
        }
        else {
            // empty list for everyone else
            return JsonResponse.listObject(new ArrayList<>(0));
        }

        List<AnnouncementsEntity> list = annoRepo.findByAdditional_ClassEntity_IdIn(ids);

        return JsonResponse.listObject(list);
    }


    @PostMapping("/api/announcements")
    public Object postAnnouncements(@RequestBody AnnouncementsRequest annoRequest, Authentication auth){
        if(!AccessCheck.postAnnouncements(auth))
            return JsonResponse.forbidden("You cant post announcements");

        Optional<UsersEntity> thisUserOpt = userRepo.findById(AccessCheck.userDetails(auth).getIdUser());
        if(thisUserOpt.isEmpty())
            return JsonResponse.internalServerError("Something really bad happened");

        UsersEntity thisUser = thisUserOpt.get();

        // insert data to entity
        AnnouncementsEntity annoEntity = new AnnouncementsEntity();
        annoEntity.setAddDate ( new Date(System.currentTimeMillis()) );
        annoEntity.setTitle   ( annoRequest.getTitle()               );
        annoEntity.setContents( annoRequest.getContents()            );
        annoEntity.setPostedBy( thisUser                             );

        // optional Additional
        AdditionalRequest addiRequest = annoRequest.getAdditional();
        if(addiRequest != null) {

            Optional<ClassesEntity> requestedClassOpt;

            if(AccessCheck.isAdmin(auth))
                requestedClassOpt = classRepo.findById(addiRequest.getIdClass());
            else // find class by classId and teacherId
                requestedClassOpt = classRepo.findByIdAndTimetable_TeacherSubject_Teacher_Id(
                    addiRequest.getIdClass(), thisUser.getId());

            if(requestedClassOpt.isEmpty())
                return JsonResponse.badRequest("You cant create announcements for this class");

            ClassesEntity requestedClass = requestedClassOpt.get();

            // insert data to entity
            AdditionalEntity addiEntity = new AdditionalEntity();
            addiEntity.setData( addiRequest.getDate() );
            addiEntity.setClassEntity( requestedClass );

            annoEntity.setAdditional( addiEntity );
        }

        try {
            return annoRepo.save(annoEntity);
        }
        catch (DataAccessException er){
            er.printStackTrace();
            return JsonResponse.badRequest("Data integrity error");
        }
    }

}

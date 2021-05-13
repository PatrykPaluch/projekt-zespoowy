package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.models.InsertMessageEntity;
import pk.pz.ultigrade.models.MessageEntity;
import pk.pz.ultigrade.repositories.InsertMessageEntityRepository;
import pk.pz.ultigrade.repositories.MessageEntityRepository;
import pk.pz.ultigrade.security.AccessCheck;
import pk.pz.ultigrade.util.JsonResponse;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class MessagesController {

    @Autowired
    private MessageEntityRepository messageRepo;

    @Autowired
    private InsertMessageEntityRepository insertMessageRepo;

    @GetMapping("/api/messages")
    public Object getMessages(Authentication auth){
        int leggedInId = AccessCheck.userDetails(auth).getIdUser();

        List<MessageEntity> messages = messageRepo.findBySender_IdOrReceiver_Id(leggedInId, leggedInId);
        return JsonResponse.listObject(messages);
    }


    @PostMapping("/api/messages")
    public Object postMessage(@RequestBody InsertMessageEntity message, Authentication auth) {
        int senderId = AccessCheck.userDetails(auth).getIdUser();

        try {
            message.setIdSender(senderId);
            return insertMessageRepo.save(message);
        } catch (DataAccessException er){
            return JsonResponse.badRequest("Can not send this message");
        }
    }

    @GetMapping("/api/messages/{id}")
    public Object getMessages(@PathVariable int id, Authentication auth){
        int leggedInId = AccessCheck.userDetails(auth).getIdUser();

        Optional<MessageEntity> message = messageRepo.findById(id);
        if(message.isEmpty())
            return JsonResponse.notFound("no message with this id");


        MessageEntity messageEntity = message.get();
        if(messageEntity.getReceiver().getId() != leggedInId
        && messageEntity.getSender().getId() != leggedInId )
            return JsonResponse.forbidden("access denied");

        return messageEntity;
    }

}

package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.configurations.SecurityConfig;
import pk.pz.ultigrade.models.InsertUserEntity;
import pk.pz.ultigrade.repositories.InsertUserEntityRepository;
import pk.pz.ultigrade.requests.RegisterRequest;
import pk.pz.ultigrade.util.JsonResponse;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    InsertUserEntityRepository insertUserEntityRepository;

    @Autowired
    PasswordEncoder encoder;


    @PostMapping(SecurityConfig.SIGNUP_PAGE)
    public Object signup(@RequestBody RegisterRequest registerRequest){
        if(insertUserEntityRepository.existsByPesel(registerRequest.getPesel())){
            return JsonResponse.badRequest("user with this pesel already exists!");
        }

        InsertUserEntity usersEntity = new InsertUserEntity(
                registerRequest.getIdRole(),
                registerRequest.getName(),
                registerRequest.getSurname(),
                encoder.encode(registerRequest.getPassword()),
                registerRequest.getPesel(),
                registerRequest.getAdress(),
                ""
        );

        try {
            return insertUserEntityRepository.save(usersEntity);
        }catch (DataAccessException er){
            return JsonResponse.badRequest("cannot inset data");
        }
    }



    @RequestMapping(value = SecurityConfig.SIGNIN_SUCCESS_PAGE,  method = {RequestMethod.POST, RequestMethod.GET})
    public ResponseEntity<?> signinSuccess(){
        return JsonResponse.ok("sign in successful");
    }

    @RequestMapping(value = SecurityConfig.SIGNIN_FAILED_PAGE, method = {RequestMethod.POST, RequestMethod.GET})
    public ResponseEntity<?> signinFailed(){
        return JsonResponse.forbidden("Wrong login or password");
    }

    @RequestMapping(value = SecurityConfig.SIGNOUT_DONE_PAGE, method = {RequestMethod.POST, RequestMethod.GET})
    public ResponseEntity<?> signoutDone(){
        return JsonResponse.ok("sign out done");
    }




}

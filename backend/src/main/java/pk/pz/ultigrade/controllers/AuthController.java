package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.configurations.SecurityConfig;
import pk.pz.ultigrade.models.UsersEntity;
import pk.pz.ultigrade.repositories.UserEntityRepository;
import pk.pz.ultigrade.requests.RegisterRequest;
import pk.pz.ultigrade.util.JsonResponse;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    UserEntityRepository userEntityRepository;

    @Autowired
    PasswordEncoder encoder;


    @PostMapping(SecurityConfig.SIGNUP_PAGE)
    public ResponseEntity<?> signup(@RequestBody RegisterRequest registerRequest){
        if(userEntityRepository.existsByPesel(registerRequest.getPesel())){
            return JsonResponse.badRequest("user with this pesel already exists!");
        }

        if(!registerRequest.getPassword().equals(registerRequest.getConfirmedPassword()) ){
            return JsonResponse.badRequest("passwords dont match!");
        }

        UsersEntity usersEntity = new UsersEntity(
                registerRequest.getIdRole(),
            registerRequest.getName(),
            registerRequest.getSurname(),
            registerRequest.getPesel(),
            encoder.encode(registerRequest.getPassword()),
            registerRequest.getPesel(),
            registerRequest.getAdress(),
        "");


        userEntityRepository.save(usersEntity);
        return JsonResponse.ok("User Registrated!");
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

    @GetMapping("/test")
    @CrossOrigin("http://localhost:3000")
    public String test(){
        return "sasadsad";
    }

}

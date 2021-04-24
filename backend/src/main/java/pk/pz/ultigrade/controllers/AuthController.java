package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pk.pz.ultigrade.models.UsersEntity;
import pk.pz.ultigrade.repositories.UserEntityRepository;
import pk.pz.ultigrade.requests.RegisterRequest;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    UserEntityRepository userEntityRepository;

    @Autowired
    PasswordEncoder encoder;


    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody RegisterRequest registerRequest){
        if(userEntityRepository.existsByPesel(registerRequest.getPesel())){
            return ResponseEntity.badRequest().body("user with this pesel already exists!");
        }

        if(!registerRequest.getPassword().equals(registerRequest.getConfirmedPassword()) ){
            return ResponseEntity.badRequest().body("passwords dont match!");
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
        return ResponseEntity.ok("User Registrated!");
    }

    @GetMapping("/test")
    @CrossOrigin("http://localhost:3000")
    public String test(){
        return "sasadsad";
    }

}

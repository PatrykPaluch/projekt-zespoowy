package pk.pz.ultigrade.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pk.pz.ultigrade.details.UserDetailsImpl;
import pk.pz.ultigrade.models.UsersBaseEntity;
import pk.pz.ultigrade.models.UsersEntity;
import pk.pz.ultigrade.repositories.ParentEntityRepository;
import pk.pz.ultigrade.repositories.StudentEntityRepository;
import pk.pz.ultigrade.repositories.TeacherEntityRepository;
import pk.pz.ultigrade.repositories.UserEntityRepository;
import pk.pz.ultigrade.util.Roles;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class AuthUserDetailsService implements UserDetailsService {

    @Autowired
    private UserEntityRepository userEntityRepository;

    @Autowired
    private StudentEntityRepository studentEntityRepository;

    @Autowired
    private TeacherEntityRepository teacherEntityRepository;

    @Autowired
    private ParentEntityRepository parentEntityRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Optional<UsersEntity> user = userEntityRepository.findByPesel(login);
        if(user.isEmpty()){
            throw new UsernameNotFoundException("User not found");
        }
        UsersEntity usersEntity = user.get();
        int userId = usersEntity.getId();
        Roles role = Roles.fromUser(usersEntity);

        UsersBaseEntity finalUserEntity = getByRole(role, userId);
        if(finalUserEntity == null)
            finalUserEntity = usersEntity;

        return new UserDetailsImpl(finalUserEntity);
    }


    private UsersBaseEntity getByRole(Roles role, int userId){
        try {
            return switch (role) {
                case PARENT -> parentEntityRepository.findById(userId).get();
                case STUDENT -> studentEntityRepository.findById(userId).get();
                case TEACHER -> teacherEntityRepository.findById(userId).get();
                default -> null;
            };
        }
        catch (NoSuchElementException er){
            return null;
        }
    }

}

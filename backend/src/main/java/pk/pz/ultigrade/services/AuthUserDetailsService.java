package pk.pz.ultigrade.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import pk.pz.ultigrade.details.UserDetailsImpl;
import pk.pz.ultigrade.models.UsersEntity;
import pk.pz.ultigrade.repositories.UserEntityRepository;

import java.util.Optional;

public class AuthUserDetailsService implements UserDetailsService {

    @Autowired
    private UserEntityRepository userEntityRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Optional<UsersEntity> user = userEntityRepository.findByPesel(login);
        if(user.isPresent())
            return new UserDetailsImpl(user.get());

        throw new UsernameNotFoundException("User not found");
    }

}

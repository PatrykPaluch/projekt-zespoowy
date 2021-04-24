package pk.pz.ultigrade.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import pk.pz.ultigrade.details.UserDetailsImpl;
import pk.pz.ultigrade.models.UsersEntity;
import pk.pz.ultigrade.repositories.UserEntityRepository;

import java.util.Optional;

public class AuthUserDetailsService implements UserDetailsService {
Logger logger = LoggerFactory.getLogger(AuthUserDetailsService.class);

    @Autowired
    private UserEntityRepository userEntityRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        logger.info("Looking for {}", login);
        Optional<UsersEntity> user = userEntityRepository.findByLogin(login);
        if(user.isPresent())
            return new UserDetailsImpl(user.get());

        logger.info("is not present");
        throw new UsernameNotFoundException("User not found");
    }

}

package pk.pz.ultigrade.repositories;

import org.springframework.data.repository.CrudRepository;
import pk.pz.ultigrade.models.WelcomeMessage;

import java.util.List;

public interface WelcomeMessageRepository extends CrudRepository<WelcomeMessage, Integer> {

    List<WelcomeMessage> findByLanguage(String language);
}

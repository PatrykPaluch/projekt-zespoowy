package pk.pz.ultigrade.repositories;

import org.springframework.data.repository.CrudRepository;
import pk.pz.ultigrade.models.UsersEntity;

import java.util.List;

public interface UserEntityRepository extends CrudRepository<UsersEntity, Integer> {
    List<UsersEntity> findByNameAndSurname(String name, String surname);
    UsersEntity findFirstByPesel(String pesel);
    boolean existsByPesel(String pesel);
}



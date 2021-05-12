package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import pk.pz.ultigrade.models.UsersBaseEntity;

import java.util.List;
import java.util.Optional;


@NoRepositoryBean
public interface UserEntityBaseRepository<T extends UsersBaseEntity> extends JpaRepository<T, Integer> {
    Optional<T> findByPesel(String pesel);
    List<T> findByNameAndSurname(String name, String surname);
    boolean existsByPesel(String pesel);
}

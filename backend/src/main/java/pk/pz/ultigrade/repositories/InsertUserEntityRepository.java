package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.InsertUserEntity;

@Repository
public interface InsertUserEntityRepository extends JpaRepository<InsertUserEntity, Integer> {

    boolean existsByPesel(String pesel);
}

package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.InsertMessageEntity;

@Repository
public interface InsertMessageEntityRepository extends JpaRepository<InsertMessageEntity, Integer> {

}

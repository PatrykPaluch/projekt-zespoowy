package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.InsertClassEntity;

@Repository
public interface InsertClassEntityRepository extends JpaRepository<InsertClassEntity, Integer> {

}

package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.AdditionalEntity;

@Repository
public interface AdditionalEntityRepository extends JpaRepository<AdditionalEntity, Integer> {

}

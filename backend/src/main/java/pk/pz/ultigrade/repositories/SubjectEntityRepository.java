package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pk.pz.ultigrade.models.SubjectEntity;

public interface SubjectEntityRepository extends JpaRepository<SubjectEntity, Integer> {
}

package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pk.pz.ultigrade.models.SubjectsEntity;

public interface SubjectEntityRepository extends JpaRepository<SubjectsEntity, Integer> {
}

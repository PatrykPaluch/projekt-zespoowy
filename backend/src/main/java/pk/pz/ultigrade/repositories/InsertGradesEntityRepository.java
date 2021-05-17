package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pk.pz.ultigrade.models.InsertGradeEntity;

public interface InsertGradesEntityRepository extends JpaRepository<InsertGradeEntity, Integer> {
}

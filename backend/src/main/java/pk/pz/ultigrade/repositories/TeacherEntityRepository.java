package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.TeacherEntity;

@Repository
public interface TeacherEntityRepository extends UserEntityBaseRepository<TeacherEntity>{



}

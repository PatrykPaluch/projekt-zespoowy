package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.InsertParentToStudentEntity;

@Repository
public interface InsertParentToStudentRepository extends JpaRepository<InsertParentToStudentEntity, Integer> {

}

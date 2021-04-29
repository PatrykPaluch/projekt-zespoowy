package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.StudentEntity;

import java.util.Optional;

@Repository
public interface StudentEntityRepository extends JpaRepository<StudentEntity, Integer> {

}

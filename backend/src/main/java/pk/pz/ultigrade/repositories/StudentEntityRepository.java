package pk.pz.ultigrade.repositories;

import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.StudentEntity;

import java.util.List;

@Repository
public interface StudentEntityRepository extends UserEntityBaseRepository<StudentEntity> {
    List<StudentEntity> findByParents_Id(int id);
}

package pk.pz.ultigrade.repositories;

import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.ParentEntity;

import java.util.List;

@Repository
public interface ParentEntityRepository extends UserEntityBaseRepository<ParentEntity> {
    List<ParentEntity> findByChildren_Id(int id);
}
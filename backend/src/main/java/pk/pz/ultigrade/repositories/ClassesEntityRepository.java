package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.ClassesEntity;

@Repository
public interface ClassesEntityRepository extends JpaRepository<ClassesEntity, Integer> {
}

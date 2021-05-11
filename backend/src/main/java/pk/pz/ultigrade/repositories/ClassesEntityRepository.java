package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.ClassesEntity;

import java.util.Optional;

@Repository
public interface ClassesEntityRepository extends JpaRepository<ClassesEntity, Integer> {

    Optional<ClassesEntity> findByStudents_IdUser(int idUser);
}

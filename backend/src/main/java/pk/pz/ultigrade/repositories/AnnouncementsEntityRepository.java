package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.AnnouncementsEntity;

import java.util.List;

@Repository
public interface AnnouncementsEntityRepository extends JpaRepository<AnnouncementsEntity, Integer> {
    List<AnnouncementsEntity> findByAdditionalIsNull();
    List<AnnouncementsEntity> findByAdditionalIsNotNull();
    List<AnnouncementsEntity> findByAdditional_ClassEntity_Id(int classId);
    List<AnnouncementsEntity> findByAdditional_ClassEntity_IdIn(List<Integer> classesIds);
}

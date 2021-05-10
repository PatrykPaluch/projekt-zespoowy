package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.TimetableEntity;

import java.util.List;

@Repository
public interface TimetableRepository extends JpaRepository<TimetableEntity, Integer> {
    List<TimetableEntity> findByClasses_Id(int classId);
    List<TimetableEntity> findByTeacherSubject_Teacher_IdUser(int teacherId);
}

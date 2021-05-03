package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.TeacherSubjectEntity;

import java.util.Optional;

@Repository
public interface SpecificSubjectEntityRepository extends JpaRepository<TeacherSubjectEntity, Integer> {

//    Optional<TeacherSubjectEntity> findByTeacher_IdUserAndSubject_Id(int teacherId, int subjectId);
}

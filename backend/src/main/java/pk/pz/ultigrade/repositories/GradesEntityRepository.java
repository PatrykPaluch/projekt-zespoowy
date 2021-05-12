package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.GradesEntity;

import java.util.List;

@Repository
public interface GradesEntityRepository extends JpaRepository<GradesEntity, Integer> {

    List<GradesEntity> findByStudent_idUser(int idStudent);

//    List<GradesEntity> findBySpecificSubject_id(int specificSubjectId);
//
    List<GradesEntity> findByTeacherSubject_Teacher_IdUserAndTeacherSubject_Subject_id(int teacherId, int subjectId);
}

package pk.pz.ultigrade.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pk.pz.ultigrade.models.MessageEntity;

import java.util.List;

@Repository
public interface MessageEntityRepository extends JpaRepository<MessageEntity, Integer> {

    List<MessageEntity> findBySender_IdOrReceiver_Id(int idSender, int idReceiver);
    List<MessageEntity> findBySender_Id(int idSender);
    List<MessageEntity> findByReceiver_Id(int idReceiver);
}

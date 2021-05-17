package pk.pz.ultigrade.models;


import javax.persistence.*;

@Entity
@Table(name = "messages")
public class MessageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_message")
    private int id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_sender")
    private UsersEntity sender;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_receiver")
    private UsersEntity receiver;

    @Column
    private String title;

    @Column
    private String contents;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public UsersEntity getSender() {
        return sender;
    }

    public void setSender(UsersEntity sender) {
        this.sender = sender;
    }

    public UsersEntity getReceiver() {
        return receiver;
    }

    public void setReceiver(UsersEntity receiver) {
        this.receiver = receiver;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }
}

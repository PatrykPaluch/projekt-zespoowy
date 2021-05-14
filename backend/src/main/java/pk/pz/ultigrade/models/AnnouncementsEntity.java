package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import pk.pz.ultigrade.responses.PublicUserResponse;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "announcements")
public class AnnouncementsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_announcements")
    private int id;

    @ManyToOne
    @JoinColumn(name = "id_posted_by")
    private UsersBaseEntity postedBy;

    @Column
    private String title;

    @Column
    private String contents;

    @Column
    private Date addDate;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "id_additional", nullable = true)
    private AdditionalEntity additional;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonProperty("postedBy")
    public PublicUserResponse getPostedByPublicUser(){
        return new PublicUserResponse(postedBy);
    }

    @JsonIgnore
    public UsersBaseEntity getPostedBy() {
        return postedBy;
    }

    public void setPostedBy(UsersBaseEntity postedBy) {
        this.postedBy = postedBy;
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

    public Date getAddDate() {
        return addDate;
    }

    public void setAddDate(Date addDate) {
        this.addDate = addDate;
    }

    public AdditionalEntity getAdditional() {
        return additional;
    }

    public void setAdditional(AdditionalEntity additional) {
        this.additional = additional;
    }
}

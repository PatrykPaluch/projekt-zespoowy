package pk.pz.ultigrade.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "welcome_message", schema = "public", catalog = "d5qp4l763upedh")
public class WelcomeMessageEntity {
    private int id;
    private String language;
    private String message;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "language")
    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    @Basic
    @Column(name = "message")
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WelcomeMessageEntity that = (WelcomeMessageEntity) o;
        return id == that.id && Objects.equals(language, that.language) && Objects.equals(message, that.message);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, language, message);
    }
}

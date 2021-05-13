package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "additional")
public class AdditionalEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_additional")
    private int id;

    @JsonProperty("date")
    @Column
    private Date data;

    @JsonProperty("class")
    @JsonIgnoreProperties({"students", "principal", "timetable"})
    @ManyToOne
    @JoinColumn(name = "id_class")
    private ClassesEntity classEntity;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public ClassesEntity getClassEntity() {
        return classEntity;
    }

    public void setClassEntity(ClassesEntity classEntity) {
        this.classEntity = classEntity;
    }
}

package pk.pz.ultigrade.models;

import javax.persistence.*;

@Entity
@Table(name = "parent_child")
public class InsertParentToStudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_parent_child")
    private int id;

    @Column(name = "id_parent")
    private int idParent;

    @Column(name = "id_child")
    private int idChild;

    public InsertParentToStudentEntity(){}

    public InsertParentToStudentEntity(int idParent, int idChild) {
        this.idParent = idParent;
        this.idChild = idChild;
    }

    public int getIdParent() {
        return idParent;
    }

    public void setIdParent(int idParent) {
        this.idParent = idParent;
    }

    public int getIdChild() {
        return idChild;
    }

    public void setIdChild(int idChild) {
        this.idChild = idChild;
    }
}

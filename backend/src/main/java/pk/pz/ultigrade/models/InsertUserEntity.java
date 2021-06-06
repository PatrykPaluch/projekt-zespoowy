package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class InsertUserEntity {

    @JsonProperty("id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", unique = true, nullable = false)
    private int idUser;
    @Column(name = "id_role")
    private int idRole;
    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private String password;
    @Column
    private String pesel;
    @Column
    private String adress;
    @Column
    private String phone;

    public InsertUserEntity(){}

    public InsertUserEntity(int idRole, String name, String surname, String password, String pesel, String adress, String phone) {
        this.idRole = idRole;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.pesel = pesel;
        this.adress = adress;
        this.phone = phone;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPesel() {
        return pesel;
    }

    public void setPesel(String pesel) {
        this.pesel = pesel;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}

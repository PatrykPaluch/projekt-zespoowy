package pk.pz.ultigrade.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "users")
@Inheritance
@DiscriminatorColumn(name = "id_role", discriminatorType = DiscriminatorType.INTEGER)
@JsonIgnoreProperties({ "password" })
public abstract class UsersBaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user", unique = true, nullable = false)
    private int idUser;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_role", referencedColumnName = "id_role", nullable = false, insertable = false, updatable = false)
    private RoleEntity role;

    @Column
    private String name;
    @Column
    private String surname;
    @Column
    @JsonIgnore
    private String password;
    @Column
    private String pesel;
    @Column
    private String adress;
    @Column
    private String phone;
    @Column
    private Date birthDate;

    public UsersBaseEntity(){}

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public RoleEntity getRole() {
        return role;
    }

    public void setRole(RoleEntity role) {
        this.role = role;
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

    @JsonIgnore
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

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsersBaseEntity that = (UsersBaseEntity) o;
        return idUser == that.idUser;
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUser);
    }
}
package pk.pz.ultigrade.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "users", schema = "public", catalog = "d5qp4l763upedh")
public class UsersEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer idUser;

    public int getIdRole() {
        return idRole;
    }

    public void setIdRole(int idRole) {
        this.idRole = idRole;
    }


    private int idRole;
    private String name;
    private String surname;
    private String login;
    private String password;
    private String pesel;
    private String adress;
    private String phone;
    private String email;

    public UsersEntity(){};

    public UsersEntity(int idRole, String name, String surname, String login,
                       String password, String pesel,
                       String adress, String phone) {
        this.idRole = idRole;
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.pesel = pesel;
        this.adress = adress;
        this.phone = phone;
        this.email = "";
    }


    @Override
    public String toString() {
        return "UsersEntity{" +
                ", idUser=" + idUser +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", login='" + login + '\'' +
                ", password='" + password + '\'' +
                ", pesel='" + pesel + '\'' +
                ", adress='" + adress + '\'' +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                '}';
    }



    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "surname")
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Basic
    @Column(name = "login")
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "pesel")
    public String getPesel() {
        return pesel;
    }

    public void setPesel(String pesel) {
        this.pesel = pesel;
    }

    @Basic
    @Column(name = "adress")
    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    @Basic
    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Basic
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsersEntity that = (UsersEntity) o;
        return idUser == that.idUser && Objects.equals(name, that.name) && Objects.equals(surname, that.surname) && Objects.equals(login, that.login) && Objects.equals(password, that.password) && Objects.equals(pesel, that.pesel) && Objects.equals(adress, that.adress) && Objects.equals(phone, that.phone) && Objects.equals(email, that.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idUser, name, surname, login, password, pesel, adress, phone, email);
    }
}

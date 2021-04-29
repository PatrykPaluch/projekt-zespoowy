package pk.pz.ultigrade.models;


import com.fasterxml.jackson.annotation.*;
import pk.pz.ultigrade.Views;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_role", referencedColumnName = "id_role")
    private RoleEntity role;

    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private String login;
    @Column
    private String password;
    @Column
    private String pesel;
    @Column
    private String adress;
    @Column
    private String phone;
    @Column
    private String email;

    @JsonIgnoreProperties("students")
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinTable(
            name = "class_student",
            joinColumns = {@JoinColumn(name = "id_student")},
            inverseJoinColumns = {@JoinColumn(name = "id_class")})
    private ClassesEntity studentClass;


    public StudentEntity(){}

    public StudentEntity(RoleEntity role, String name, String surname, String login, String password, String pesel, String adress, String phone, String email) {
        this.role = role;
        this.name = name;
        this.surname = surname;
        this.login = login;
        this.password = password;
        this.pesel = pesel;
        this.adress = adress;
        this.phone = phone;
        this.email = email;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ClassesEntity getStudentClass() {
        return studentClass;
    }

    public void setStudentClass(ClassesEntity studentClass) {
        this.studentClass = studentClass;
    }
}

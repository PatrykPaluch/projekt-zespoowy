package pk.pz.ultigrade.requests;

public class RegisterRequest {
    private int idRole;
    private String name;
    private String surname;
    private String pesel;
    private String password;
    private String confirmedPassword;
    private String adress;
    private String birthDate;
    private long classN;

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

    public String getPesel() {
        return pesel;
    }

    public void setPesel(String pesel) {
        this.pesel = pesel;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmedPassword() {
        return confirmedPassword;
    }

    public void setConfirmedPassword(String confirmedPassword) {
        this.confirmedPassword = confirmedPassword;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public long getClassN() {
        return classN;
    }

    public void setClassN(long classN) {
        this.classN = classN;
    }

    @Override
    public String toString() {
        return "RegisterRequest{" +
                "idRole=" + idRole +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", pesel='" + pesel + '\'' +
                ", password='" + password + '\'' +
                ", confirmedPassword='" + confirmedPassword + '\'' +
                ", adress='" + adress + '\'' +
                ", birthDate='" + birthDate + '\'' +
                ", classN=" + classN +
                '}';
    }
}

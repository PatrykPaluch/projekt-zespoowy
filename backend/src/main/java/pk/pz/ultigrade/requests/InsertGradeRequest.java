package pk.pz.ultigrade.requests;

public class InsertGradeRequest {

    private String grade;
    private String description;
    private int idSubject;
    private int idTeacher;

    public InsertGradeRequest(String grade, String description, int idSubject, int idTeacher) {
        this.grade = grade;
        this.description = description;
        this.idSubject = idSubject;
        this.idTeacher = idTeacher;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getIdSubject() {
        return idSubject;
    }

    public void setIdSubject(int idSubject) {
        this.idSubject = idSubject;
    }

    public int getIdTeacher() {
        return idTeacher;
    }

    public void setIdTeacher(int idTeacher) {
        this.idTeacher = idTeacher;
    }

    @Override
    public String toString() {
        return "AddGradeRequest{" +
                "grade=" + grade +
                ", destription='" + description + '\'' +
                ", idSubject=" + idSubject +
                ", idTeacher=" + idTeacher +
                '}';
    }
}

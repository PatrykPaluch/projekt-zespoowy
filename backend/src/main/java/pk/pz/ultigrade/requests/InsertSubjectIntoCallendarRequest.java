package pk.pz.ultigrade.requests;

public class InsertSubjectIntoCallendarRequest {
    private int idTeacherSubject;
    private String day;
    private String time;


    public InsertSubjectIntoCallendarRequest(int idTeacherSubject, String day, String time) {
        this.idTeacherSubject = idTeacherSubject;
        this.day = day;
        this.time = time;
    }

    public int getIdTeacherSubject() {
        return idTeacherSubject;
    }

    public void setIdTeacherSubject(int idTeacherSubject) {
        this.idTeacherSubject = idTeacherSubject;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "InsertSubjectIntoCallendarRequest{" +
                "idTeacherSubject=" + idTeacherSubject +
                ", day='" + day + '\'' +
                ", time='" + time + '\'' +
                '}';
    }
}

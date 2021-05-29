package pk.pz.ultigrade.requests;

import pk.pz.ultigrade.util.JsonResponse;

public class InsertClassRequest {

    private String name;
    private String schoolYear;
    private int idTutor;

    public InsertClassRequest() {
    }

    public InsertClassRequest(String name, String schoolYear, int idTutor) {
        this.name = name;
        this.schoolYear = schoolYear;
        this.idTutor = idTutor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public int getIdTutor() {
        return idTutor;
    }

    public void setIdTutor(int idTutor) {
        this.idTutor = idTutor;
    }
}

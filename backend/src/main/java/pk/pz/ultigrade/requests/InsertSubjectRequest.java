package pk.pz.ultigrade.requests;


public class InsertSubjectRequest {

    private String subjectName;



    public InsertSubjectRequest() {}
    public InsertSubjectRequest(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    @Override
    public String toString() {
        return "InsertSubjectRequest{" +
                "subjectName='" + subjectName + '\'' +
                '}';
    }
}

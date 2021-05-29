package pk.pz.ultigrade.requests;

public class InsertParentToStudentRequest {

    private int userId;

    public InsertParentToStudentRequest() {
    }

    public InsertParentToStudentRequest(int userId) {
        this.userId = userId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}

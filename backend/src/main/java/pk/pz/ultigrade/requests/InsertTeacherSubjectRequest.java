package pk.pz.ultigrade.requests;

public class InsertTeacherSubjectRequest {

    private int subjectId;
    private int teacherId;

    public InsertTeacherSubjectRequest() {
    }

    public InsertTeacherSubjectRequest(int subjectId, int teacherId) {
        this.subjectId = subjectId;
        this.teacherId = teacherId;
    }

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }
}

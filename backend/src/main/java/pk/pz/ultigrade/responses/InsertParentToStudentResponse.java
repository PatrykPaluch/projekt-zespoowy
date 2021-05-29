package pk.pz.ultigrade.responses;

import pk.pz.ultigrade.models.UsersBaseEntity;

public class InsertParentToStudentResponse {

    private PublicUserResponse student;
    private PublicUserResponse parent;

    public InsertParentToStudentResponse(UsersBaseEntity student, UsersBaseEntity parent) {
        this.student = new PublicUserResponse(student);
        this.parent = new PublicUserResponse(parent);
    }

    public PublicUserResponse getStudent() {
        return student;
    }

    public void setStudent(PublicUserResponse student) {
        this.student = student;
    }

    public PublicUserResponse getParent() {
        return parent;
    }

    public void setParent(PublicUserResponse parent) {
        this.parent = parent;
    }
}

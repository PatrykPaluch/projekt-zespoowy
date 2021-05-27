package pk.pz.ultigrade.requests;

import java.util.ArrayList;
import java.util.List;

public class InsertUsersRequest {

    private List<Integer> userIds;

    public InsertUsersRequest(){
        userIds = new ArrayList<>();
    }

    public InsertUsersRequest(List<Integer> userIds) {
        this.userIds = userIds;
    }

    public List<Integer> getUserIds() {
        return userIds;
    }

    public void setUserIds(List<Integer> userIds) {
        this.userIds = userIds;
    }
}

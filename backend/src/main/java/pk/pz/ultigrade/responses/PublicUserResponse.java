package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import pk.pz.ultigrade.models.RoleEntity;
import pk.pz.ultigrade.models.UsersBaseEntity;

public class PublicUserResponse {

    @JsonIgnore
    private final UsersBaseEntity user;

    public PublicUserResponse(UsersBaseEntity user){
        this.user = user;
    }

    public int getId() {
        return user.getIdUser();
    }

    public RoleEntity getRole() {
        return user.getRole();
    }

    public String getName() {
        return user.getName();
    }

    public String getSurname() {
        return user.getSurname();
    }

    public String getPesel() {
        return user.getPesel();
    }

    public String getAdress() {
        return user.getAdress();
    }

    public String getPhone() {
        return user.getPhone();
    }
}

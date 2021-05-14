package pk.pz.ultigrade.responses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import pk.pz.ultigrade.models.RoleEntity;
import pk.pz.ultigrade.models.UsersBaseEntity;

import java.sql.Date;

public class PublicUserResponse {

    @JsonIgnore
    private final UsersBaseEntity user;

    public PublicUserResponse(UsersBaseEntity user){
        this.user = user;
    }

    public int getId() {
        return user.getId();
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

    public String getAddress() {
        return user.getAdress();
    }

    public String getPhone() {
        return user.getPhone();
    }

    public Date getBirthDate() {
        return user.getBirthDate();
    }
}

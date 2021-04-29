package pk.pz.ultigrade.models;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("not null")
public class UsersEntity extends UsersBaseEntity {

    public UsersEntity(){
        super();
    }

}

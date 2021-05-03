package pk.pz.ultigrade.details;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import pk.pz.ultigrade.models.RoleEntity;
import pk.pz.ultigrade.models.UsersBaseEntity;

import java.util.Collection;
import java.util.List;

public class UserDetailsImpl implements UserDetails {

    private final UsersBaseEntity user;
    private final List<SimpleGrantedAuthority> authorities;

    public UserDetailsImpl(UsersBaseEntity user){
        this.user = user;

        authorities = List.of(
                new SimpleGrantedAuthority(user.getRole().getRole())
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getPesel();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
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

    public RoleEntity getRole() {
        return user.getRole();
    }

    public Integer getIdUser() {
        return user.getIdUser();
    }

    public String getName() {
        return user.getName();
    }

    public String getSurname() {
        return user.getSurname();
    }
}

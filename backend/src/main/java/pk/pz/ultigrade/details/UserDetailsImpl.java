package pk.pz.ultigrade.details;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import pk.pz.ultigrade.models.UsersEntity;
import pk.pz.ultigrade.util.Roles;

import java.util.Collection;
import java.util.List;

public class UserDetailsImpl implements UserDetails {

    private final UsersEntity user;
    private final List<SimpleGrantedAuthority> authorities;

    public UserDetailsImpl(UsersEntity user){
        this.user = user;

        Roles userRole = Roles.fromNumber(user.getIdRole());
        authorities = List.of(
                new SimpleGrantedAuthority(userRole.getName())
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
        return user.getLogin();
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


    public String getEmail() {
        return user.getEmail();
    }

    public int getIdRole() {
        return user.getIdRole();
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

    public String getLogin() {
        return user.getLogin();
    }
}

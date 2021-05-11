package pk.pz.ultigrade.details;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import pk.pz.ultigrade.models.*;
import pk.pz.ultigrade.responses.PublicUserResponse;
import pk.pz.ultigrade.util.Roles;

import java.sql.Date;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

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

    public Roles getRoleEnum() {
        return Roles.fromNumber(user.getRole().getId());
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

    public Set<PublicUserResponse> parentGetChildren(){
        if(user instanceof ParentEntity)
           return ((ParentEntity)user).getChildren().stream().map(PublicUserResponse::new).collect(Collectors.toSet());

        throw new IllegalStateException("This user is not a parent");
    }

    public Set<PublicUserResponse> studentGetParents(){
        if(user instanceof StudentEntity)
            return ((StudentEntity)user).getParents().stream().map(PublicUserResponse::new).collect(Collectors.toSet());

        throw new IllegalStateException("This user is not a student");
    }

    public ClassesEntity studentGetClass(){
        if(user instanceof StudentEntity)
            return ((StudentEntity)user).getStudentClass();

        throw new IllegalStateException("This user is not a student");
    }

    public Set<TeacherSubjectEntity> teacherGetSubjects(){
        if(user instanceof TeacherEntity)
            return ((TeacherEntity)user).getSubjects();

        throw new IllegalStateException("This user is not a teacher");
    }

    public boolean isAdmin(){
        return getRoleEnum() == Roles.ADMIN;
    }

    public UsersBaseEntity getUser() {
        return user;
    }

    public Date getBirthDate() {
        return user.getBirthDate();
    }
}

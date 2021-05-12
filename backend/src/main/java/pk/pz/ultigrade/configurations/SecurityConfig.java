package pk.pz.ultigrade.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import pk.pz.ultigrade.entrypoints.AuthAccessDeniedEntryPoint;
import pk.pz.ultigrade.services.AuthUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        prePostEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    public static final String AUTH_PATH = "/api/auth";
    public static final String SIGNUP_PAGE = "/signup";
    public static final String SIGNIN_PAGE = "/signin";
    public static final String SIGNOUT_PAGE = "/signout";
    public static final String SIGNIN_SUCCESS_PAGE = "/signinSuccess";
    public static final String SIGNIN_FAILED_PAGE = "/signinFailed";
    public static final String SIGNOUT_DONE_PAGE = "/signinDone";

    public static final String SIGNUP_PATH = AUTH_PATH + SIGNUP_PAGE;
    public static final String SIGNIN_PATH = AUTH_PATH + SIGNIN_PAGE;
    public static final String SIGNOUT_PATH = AUTH_PATH + SIGNOUT_PAGE;
    public static final String SIGNIN_SUCCESS_PATH = AUTH_PATH + SIGNIN_SUCCESS_PAGE;
    public static final String SIGNIN_FAILED_PATH = AUTH_PATH + SIGNIN_FAILED_PAGE;
    public static final String SIGNOUT_DONE_PATH = AUTH_PATH + SIGNOUT_DONE_PAGE;

    public static final String[] CSRF_IGNORE_PAGES = {
            SIGNUP_PATH, SIGNIN_PATH, SIGNOUT_PATH, SIGNIN_SUCCESS_PATH, SIGNIN_FAILED_PATH, SIGNOUT_DONE_PATH
    };
    public static final String[] NO_AUTH_PERMIT_PAGES = {
            "/public/**", SIGNUP_PATH, SIGNIN_PATH, SIGNIN_FAILED_PATH, SIGNOUT_DONE_PATH
    };

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return new AuthUserDetailsService();
    }

    @Bean
    public AuthenticationEntryPoint authenticationEntryPoint() {
        return new AuthAccessDeniedEntryPoint();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(encoder());
        return authenticationProvider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                    .disable()
                    //.ignoringAntMatchers(CSRF_IGNORE_PAGES)
                //.and()
                    .authorizeRequests()
                    .antMatchers(NO_AUTH_PERMIT_PAGES).permitAll()
                    .anyRequest().authenticated()
                .and()
                    .formLogin()
                    .usernameParameter("login")
                    .passwordParameter("password")
                    .loginProcessingUrl(SIGNIN_PATH)
                    .defaultSuccessUrl(SIGNIN_SUCCESS_PATH)
                    .failureUrl(SIGNIN_FAILED_PATH)
                    .successForwardUrl(SIGNIN_SUCCESS_PATH)
                    .permitAll()
                .and()
                    .logout()
                    .logoutUrl(SIGNOUT_PATH)
                    .permitAll()
                    .deleteCookies("JSESSIONID")
                    .invalidateHttpSession(true)
                    .clearAuthentication(true)
                    .logoutSuccessUrl(SIGNOUT_DONE_PATH)
                .and()
                    .exceptionHandling()
                    .authenticationEntryPoint(authenticationEntryPoint())
                ;
    }
}

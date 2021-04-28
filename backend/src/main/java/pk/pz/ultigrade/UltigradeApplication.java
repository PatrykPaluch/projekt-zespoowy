package pk.pz.ultigrade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class UltigradeApplication {


    public static void main(String[] args) { SpringApplication.run(UltigradeApplication.class, args);}

}

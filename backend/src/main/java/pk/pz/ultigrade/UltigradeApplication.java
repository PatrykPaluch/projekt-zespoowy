package pk.pz.ultigrade;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.util.ResourceUtils;

import javax.sql.DataSource;
import java.io.File;
import java.io.FileNotFoundException;
import java.sql.DriverManager;

@SpringBootApplication
public class UltigradeApplication {

    public static void main(String[] args) { SpringApplication.run(UltigradeApplication.class, args);}

}

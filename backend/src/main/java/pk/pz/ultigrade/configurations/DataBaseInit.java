package pk.pz.ultigrade.configurations;


import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.ResourceUtils;

import javax.sql.DataSource;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

@Configuration
public class DataBaseInit {

    /**
     * Required file {@code resources/dbConnectionInfo.json}
     * <pre>{@code
     * {
     *   url : string,
     *   user : string,
     *   password : string
     * }
     * }</pre>
     * @return datasource
     * @throws IOException failed to read file
     */
    @Bean
    public DataSource dataSource() throws IOException{
        Logger logger = LoggerFactory.getLogger(DataBaseInit.class);
        logger.info(org.postgresql.Driver.class.getName());
        try{

            File dbInfoFile = ResourceUtils.getFile("classpath:dbConnectionInfo.json");
            JSONObject jsonObject = new JSONObject(Files.readString(dbInfoFile.toPath()));

            return DataSourceBuilder.create()
                    .driverClassName("org.postgresql.Driver")
                    .url(jsonObject.getString("url"))
                    .username(jsonObject.getString("user"))
                    .password(jsonObject.getString("password"))
                    .build();
        }catch (IOException | JSONException e){
            e.printStackTrace();
            return null;
        }
    }

}
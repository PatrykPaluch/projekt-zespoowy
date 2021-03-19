package pk.pz.ultigrade.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ResourceUtils;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Locale;


public class LocalizedWelcomeMessages {
    private static final Logger logger = LoggerFactory.getLogger(LocalizedWelcomeMessages.class);

    private static final String WELCOME_MESSAGE_FILE_PATH = "datafiles/WelcomeMessages";
    private static final Locale DEFAULT_LOCALE = Locale.US;

    private final HashMap<String, String[]> list;

    private static LocalizedWelcomeMessages instance;
    public static synchronized LocalizedWelcomeMessages getInstance(){
        if(instance == null)
            instance = new LocalizedWelcomeMessages();
        return instance;
    }

    private LocalizedWelcomeMessages(){
        list = new HashMap<String, String[]>();
    }

    public String[] getLocalized(Locale locale){
        return getLocalized(locale, false);
    }

    public String[] getLocalized(Locale locale, boolean preventDefault){
        String tag = locale.getLanguage();
        String[] localized = list.get(tag);
        if(localized == null) {
            localized = initializeLocalized(tag);
            if (localized == null)
                localized = preventDefault ? null : getDefault();
        }

        return localized;
    }

    public String[] getDefault(){
        String[] lines = getLocalized(DEFAULT_LOCALE, true);
        if(lines == null) {
            lines = new String[]{"Remember to always put localized files in your project..."};
            list.put(DEFAULT_LOCALE.toLanguageTag(), lines);
        }
        return lines;
    }

    private String[] initializeLocalized(String tag){
        try {
            URI path = ResourceUtils.getFile("classpath:" + WELCOME_MESSAGE_FILE_PATH + "." + tag + ".txt").toURI();
            String[] lines = Files.readAllLines(Path.of(path)).toArray(new String[0]);
            if(lines.length != 0){
                list.put(tag, lines);
                logger.info("Initialized welcome messages for " + tag);
                return lines;
            }
        }
        catch (IOException ignored){}
        logger.info("Failed to initialize welcome messages for " + tag);
        return null;
    }

}

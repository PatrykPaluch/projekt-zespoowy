package pk.pz.ultigrade.structures;

import pk.pz.ultigrade.util.LocalizedWelcomeMessages;
import pk.pz.ultigrade.util.RandomUtils;

import java.util.Locale;

public class WelcomeMessageStructure {

    public String welcomeMessage;
    public long currentTimeMillis;

    public WelcomeMessageStructure(String s){
        welcomeMessage = s;
        currentTimeMillis = System.currentTimeMillis();
    }

    public WelcomeMessageStructure(Locale locale){
        this(getRandomWelcomeMessage(locale));
    }

    private static String getRandomWelcomeMessage(Locale locale){
        String[] list = LocalizedWelcomeMessages.getInstance().getLocalized(locale);
        return RandomUtils.randomElement(list);
    }

}

package pk.pz.ultigrade.structures;

public class WelcomeMessageStructure {

    public String welcomeMessage;
    public long currentTimeMillis;

    public WelcomeMessageStructure(String s){
        welcomeMessage = s;
        currentTimeMillis = System.currentTimeMillis();
    }
}

package pk.pz.ultigrade.util;

import java.util.List;
import java.util.Locale;

public class LocaleUtils {

    public static Locale.LanguageRange getTheBest(List<Locale.LanguageRange> list){
        Locale.LanguageRange best = list.get(0);
        for(Locale.LanguageRange lr : list){
            if(best.getWeight() < lr.getWeight())
                best = lr;
        }
        return best;
    }


    private LocaleUtils(){
    }


}

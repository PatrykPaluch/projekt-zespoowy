package pk.pz.ultigrade.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.structures.WelcomeMessageStructure;
import pk.pz.ultigrade.util.LocaleUtils;

import java.util.List;
import java.util.Locale;

@RestController
public class WelcomeController {

    @GetMapping("/welcome")
    public WelcomeMessageStructure WelcomeMessage(
            @RequestHeader(name = "Accept-Language", required = false, defaultValue = "en-us") String acceptedLanguage
    ){
        List<Locale.LanguageRange> list = Locale.LanguageRange.parse(acceptedLanguage);
        Locale locale = new Locale(LocaleUtils.getTheBest(list).getRange());
        return new WelcomeMessageStructure(locale);
    }
}

package pk.pz.ultigrade.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import pk.pz.ultigrade.models.WelcomeMessage;
import pk.pz.ultigrade.repositories.WelcomeMessageRepository;
import pk.pz.ultigrade.structures.WelcomeMessageStructure;
import pk.pz.ultigrade.util.LocaleUtils;
import pk.pz.ultigrade.util.RandomUtils;

import java.util.List;
import java.util.Locale;

@RestController
public class WelcomeController {

    @Autowired
    private WelcomeMessageRepository wmRepository;


    @GetMapping("/welcome")
    public WelcomeMessageStructure WelcomeMessage(
            @RequestHeader(name = "Accept-Language", required = false, defaultValue = "en-us") String acceptedLanguage
    ){
        List<Locale.LanguageRange> list = Locale.LanguageRange.parse(acceptedLanguage);
        Locale locale = new Locale(LocaleUtils.getTheBest(list).getRange());

        String language = locale.getLanguage().substring(0, 2);
        List<WelcomeMessage> messages = wmRepository.findByLanguage(language);
        String message = RandomUtils.randomElement(messages).getMessage();

        return new WelcomeMessageStructure(message);
    }

}

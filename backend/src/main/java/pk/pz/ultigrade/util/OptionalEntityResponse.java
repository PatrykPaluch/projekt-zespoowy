package pk.pz.ultigrade.util;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;

import java.util.Optional;

public class OptionalEntityResponse {

    private OptionalEntityResponse(){}


    public static <T> T get(Optional<T> entity) throws ResourceNotFoundException {
        return get(entity, "Entity not found");
    }
    public static <T> T get(Optional<T> entity, String notFoundMessage) throws ResourceNotFoundException {
        if(entity.isPresent())
            return entity.get();

        throw new ResourceNotFoundException(notFoundMessage);
    }
}

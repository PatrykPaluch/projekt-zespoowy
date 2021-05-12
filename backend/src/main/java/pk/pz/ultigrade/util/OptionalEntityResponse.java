package pk.pz.ultigrade.util;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;

import java.util.Optional;

public class OptionalEntityResponse {

    private OptionalEntityResponse(){}


    public static Object  get(Optional<?> entity) throws ResourceNotFoundException {
        return get(entity, "Entity not found");
    }
    public static Object get(Optional<?> entity, String notFoundMessage) throws ResourceNotFoundException {
        if(entity.isPresent())
            return entity.get();

        return JsonResponse.notFound(notFoundMessage);
    }
}

package pk.pz.ultigrade.util;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

public class JsonResponse {

    private JsonResponse() { }

    public static ResponseEntity<?> ok(String message) {
        return newResponse(200, message);
    }

    public static ResponseEntity<?> created(String message) {
        return newResponse(201, message);
    }

    public static ResponseEntity<?> accepted(String message) {
        return newResponse(202, message);
    }

    public static ResponseEntity<?> noContent(String message) {
        return newResponse(204, message);
    }

    public static ResponseEntity<?> multipleChoice(String message) {
        return newResponse(300, message);
    }

    public static ResponseEntity<?> found(String message) {
        return newResponse(302, message);
    }

    public static ResponseEntity<?> badRequest(String message) {
        return newResponse(400, message);
    }

    public static ResponseEntity<?> unauthorized(String message) {
        return newResponse(401, message);
    }

    public static ResponseEntity<?> forbidden(String message) {
        return newResponse(403, message);
    }

    public static ResponseEntity<?> notFound(String message) {
        return newResponse(404, message);
    }

    public static ResponseEntity<?> notAcceptable(String message) {
        return newResponse(406, message);
    }

    public static ResponseEntity<?> conflict(String message) {
        return newResponse(409, message);
    }

    public static ResponseEntity<?> internalServerError(String message) {
        return newResponse(500, message);
    }

    public static ResponseEntity<?> imATeapot() {
        return imATeapot("I'm a teapot");
    }
    public static ResponseEntity<?> imATeapot(String message) {
        return newResponse(418, message);
    }


    public static ResponseEntity<?> newResponse(HttpStatus code, String message) {
        return newResponse(code.value(), message);
    }
    public static ResponseEntity<?> newResponse(int code, String message){
        return ResponseEntity
                .status(code)
                .contentType(MediaType.APPLICATION_JSON)
                .body(getFullMessageJSon(message));
    }

    private static String getFullMessageJSon(String message){
        try {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("message", message);
            return jsonObject.toString();
        }catch (JSONException er){
            return "{\"message\":null}";
        }
    }
}

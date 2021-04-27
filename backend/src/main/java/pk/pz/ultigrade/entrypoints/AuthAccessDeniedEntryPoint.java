package pk.pz.ultigrade.entrypoints;

import net.minidev.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthAccessDeniedEntryPoint  implements AuthenticationEntryPoint {

    private static final Logger logger = LoggerFactory.getLogger(AuthAccessDeniedEntryPoint.class);

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        JSONObject responseJson = new JSONObject();
        String path = (String) request.getAttribute(RequestDispatcher.FORWARD_REQUEST_URI);
        responseJson.put("time", System.currentTimeMillis());
        responseJson.put("status", 403);
        responseJson.put("message", "Auth access denied: " + authException.getMessage());
        responseJson.put("path", path);
        String jsonStr = responseJson.toJSONString();
        response.setContentType("application/json;charset=UTF-8");
        response.setContentLength(jsonStr.length());
        response.setStatus(403);
        response.getWriter().write(jsonStr);
        logger.info("Request denied: AuthenticationException '{}': {}", path, authException.getMessage());
    }
}

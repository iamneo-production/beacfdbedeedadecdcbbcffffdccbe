import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.AuthService;

@RestController
@RequestMapping("/admin")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Admin Login
    @PostMapping("/login")
    public ResponseEntity<Boolean> adminLogin(@RequestBody LoginModel loginData) {
        boolean isAdminAuthenticated = authService.isAdminPresent(loginData);
        return ResponseEntity.ok(isAdminAuthenticated);
    }

    // Admin SignUp
    @PostMapping("/signup")
    public ResponseEntity<String> adminSignUp(@RequestBody UserModel userData) {
        String adminSignUpResult = authService.saveAdmin(userData);
        return ResponseEntity.ok(adminSignUpResult);
    }

    // User Login
    @PostMapping("/user/login")
    public ResponseEntity<Boolean> userLogin(@RequestBody LoginModel loginData) {
        boolean isUserAuthenticated = authService.isUserPresent(loginData);
        return ResponseEntity.ok(isUserAuthenticated);
    }

    // User SignUp
    @PostMapping("/user/signup")
    public ResponseEntity<String> userSignUp(@RequestBody UserModel userData) {
        String userSignUpResult = authService.saveUser(userData);
        return ResponseEntity.ok(userSignUpResult);
    }
}

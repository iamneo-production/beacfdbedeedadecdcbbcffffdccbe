import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.LoginModel;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.AuthRepository;

@Service
public class AuthService {

    @Autowired
    private AuthRepository authRepository;

    public boolean isAdminPresent(LoginModel loginData) {
        // Check if an admin with the provided email exists in the database
        UserModel admin = authRepository.findByEmailAndUserRole(loginData.getEmail(), "admin");
        
        // If an admin is found and the password matches, return true
        return admin != null && admin.getPassword().equals(loginData.getPassword());
    }

    public String saveAdmin(UserModel userData) {
        // Set the user role to "admin" before saving to the database
        userData.setUserRole("admin");
        
        // Save the admin to the database
        authRepository.save(userData);
        
        return "Admin added successfully";
    }

    public boolean isUserPresent(LoginModel loginData) {
        // Check if a user with the provided email exists in the database
        UserModel user = authRepository.findByEmailAndUserRole(loginData.getEmail(), "user");
        
        // If a user is found and the password matches, return true
        return user != null && user.getPassword().equals(loginData.getPassword());
    }

    public String saveUser(UserModel userData) {
        // Set the user role to "user" before saving to the database
        userData.setUserRole("user");
        
        // Save the user to the database
        authRepository.save(userData);
        
        return "User added successfully";
    }
}

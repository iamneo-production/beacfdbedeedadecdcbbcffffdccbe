import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.examly.springapp.model.UserModel;

@Repository
public interface AuthRepository extends JpaRepository<UserModel, Long> {

    // Custom query method to find a user by email and user role
    UserModel findByEmailAndUserRole(String email, String userRole);
}

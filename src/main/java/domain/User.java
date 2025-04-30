package domain;

import jakarta.persistence.Entity;
import lombok.*;
import org.springframework.data.annotation.*;

@Entity
public class User {

    @Id
    private String userId;

    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;

}

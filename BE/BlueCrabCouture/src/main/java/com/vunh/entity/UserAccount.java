package com.vunh.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name = "UserAccount")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserAccount {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "The phone number is empty!")
    @Column(name = "phone_number")
    private String phoneNumber;

    @NotBlank(message = "The email is empty!")
    @Column(name = "email")
    private String email;

    @NotBlank(message = "The password is empty!")
    @Column(name = "password")
    private String password;

    @ManyToOne
    @JoinColumn(name = "id_user_role")
    private UserRole role;

    @Column(name = "is_locked")
    private Boolean isLocked = false;

    @Column(name = "create_date")
    private Date createDate = new Date();
}

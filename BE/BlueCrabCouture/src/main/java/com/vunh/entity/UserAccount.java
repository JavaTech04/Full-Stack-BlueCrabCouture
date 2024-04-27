package com.vunh.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import org.hibernate.validator.constraints.Length;

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

    @Length(min = 10, max = 13, message = "Invalid format phone number!")
    @NotBlank(message = "The phone number is empty!")
    @Column(name = "phone_number")
    private String phoneNumber;

    @NotBlank(message = "The email is empty!")
    @Email(message = "Invalid format email!")
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

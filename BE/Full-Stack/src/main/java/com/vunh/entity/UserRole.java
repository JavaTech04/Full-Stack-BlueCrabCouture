package com.vunh.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name = "UserRole")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserRole {
    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "role_name")
    private String roleName;

    @Column(name = "create_date")
    private Date createDate;
}

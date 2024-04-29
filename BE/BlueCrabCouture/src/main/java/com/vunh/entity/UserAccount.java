package com.vunh.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Nationalized;

import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class UserAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 13)
    @NotNull
    @Nationalized
    @Column(name = "phone_number", nullable = false, length = 13)
    private String phoneNumber;

    @Size(max = 100)
    @NotNull
    @Nationalized
    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Size(max = 50)
    @NotNull
    @Nationalized
    @Column(name = "password", nullable = false, length = 50)
    private String password;

    @NotNull
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "id_user_role", nullable = false)
    private UserRole idUserRole;

    @NotNull
    @ColumnDefault("0")
    @Column(name = "is_locked", nullable = false)
    private Boolean isLocked = false;

    @ColumnDefault("getdate()")
    @Column(name = "create_date")
    private Date createDate = new Date();

    @OneToMany(mappedBy = "idUserAccount")
    private Set<Order> orders = new LinkedHashSet<>();

    @OneToMany(mappedBy = "idUserAccount")
    @JsonIgnore
    private Set<Product> products = new LinkedHashSet<>();

    @OneToMany(mappedBy = "idUser")
    private Set<ShoppingCart> shoppingCarts = new LinkedHashSet<>();

    @OneToOne(mappedBy = "idUserAccount")
    private UserAccountDetail userAccountDetail;

}
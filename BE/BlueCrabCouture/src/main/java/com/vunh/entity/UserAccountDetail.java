package com.vunh.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class UserAccountDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 50)
    @Nationalized
    @Column(name = "name", length = 50)
    private String name;

    @ColumnDefault("0")
    @Column(name = "gender")
    private Boolean gender;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Size(max = 255)
    @Nationalized
    @Column(name = "avatar")
    private String avatar;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_user_account")
    @JsonIgnore
    private UserAccount idUserAccount;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_user_address")
    private UserAddress idUserAddress;

    @ColumnDefault("getdate()")
    @Column(name = "last_edited")
    private LocalDate lastEdited;

}
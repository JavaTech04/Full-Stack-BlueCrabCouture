package com.vunh.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Nationalized;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class UserAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 50)
    @NotNull
    @Nationalized
    @Column(name = "city", nullable = false, length = 50)
    private String city;

    @Size(max = 50)
    @NotNull
    @Nationalized
    @Column(name = "district", nullable = false, length = 50)
    private String district;

    @Size(max = 255)
    @NotNull
    @Nationalized
    @Column(name = "specific_information", nullable = false)
    private String specificInformation;


//    @OneToOne(fetch = FetchType.LAZY, mappedBy = "idUserAddress")
//    @JsonIgnore
//    private UserAccountDetail userAccountDetail;

}
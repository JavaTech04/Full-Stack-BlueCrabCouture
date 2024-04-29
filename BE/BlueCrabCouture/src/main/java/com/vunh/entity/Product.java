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

import java.time.LocalDate;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 255)
    @Nationalized
    @Column(name = "code")
    private String code;

    @Size(max = 255)
    @NotNull
    @Nationalized
    @Column(name = "name", nullable = false)
    private String name;

    @ColumnDefault("0")
    @Column(name = "sold")
    private Integer sold = 0;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_image")
    private Image idImage;

    @ColumnDefault("0")
    @Column(name = "is_deleted")
    private Boolean isDeleted = false;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user_account", nullable = false)
    @JsonIgnore
    private UserAccount idUserAccount;

    @ColumnDefault("getdate()")
    @Column(name = "create_date")
    private Date createDate = new Date();

//    @OneToMany(mappedBy = "idProduct")
//    private Set<ProductDetail> productDetails = new LinkedHashSet<>();

}
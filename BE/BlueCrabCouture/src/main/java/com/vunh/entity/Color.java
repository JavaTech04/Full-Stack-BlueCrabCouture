package com.vunh.entity;

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
public class Color {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 20)
    @NotNull
    @Nationalized
    @Column(name = "color_code", nullable = false, length = 20)
    private String colorCode;

    @Size(max = 20)
    @NotNull
    @Nationalized
    @Column(name = "name", nullable = false, length = 20)
    private String name;

    @ColumnDefault("getdate()")
    @Column(name = "create_date")
    private Date createDate = new Date();

//    @OneToMany(mappedBy = "idColor")
//    private Set<ProductDetail> productDetails = new LinkedHashSet<>();

}
package com.vunh.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Nationalized;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "\"Size\"")
public class Size {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @jakarta.validation.constraints.Size(max = 20)
    @NotNull
    @Nationalized
    @Column(name = "name", nullable = false, length = 20)
    private String name;

    @ColumnDefault("getdate()")
    @Column(name = "create_date")
    private LocalDate createDate;

    @OneToMany(mappedBy = "idSize")
    private Set<ProductDetail> productDetails = new LinkedHashSet<>();

}
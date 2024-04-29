package com.vunh.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private UserAccount idUser;

    @ColumnDefault("0")
    @Column(name = "quantity_product")
    private Integer quantityProduct;

    @ColumnDefault("0")
    @Column(name = "total_money", precision = 10, scale = 2)
    private BigDecimal totalMoney;

    @OneToMany(mappedBy = "idShoppingCart")
    private Set<ShoppingCartDetail> shoppingCartDetails = new LinkedHashSet<>();

}
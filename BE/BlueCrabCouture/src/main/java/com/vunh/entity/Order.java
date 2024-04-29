package com.vunh.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Nationalized;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "Orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 50)
    @NotNull
    @Nationalized
    @Column(name = "code_order", nullable = false, length = 50)
    private String codeOrder;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user_account", nullable = false)
    private UserAccount idUserAccount;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_status_invoice", nullable = false)
    private InvoiceStatus idStatusInvoice;

    @ColumnDefault("0")
    @Column(name = "total_money", precision = 10, scale = 2)
    private BigDecimal totalMoney;

    @ColumnDefault("0")
    @Column(name = "quantity_product")
    private Integer quantityProduct;

    @ColumnDefault("getdate()")
    @Column(name = "create_date")
    private LocalDate createDate;

    @OneToMany(mappedBy = "idOrder")
    private Set<OrderItem> orderItems = new LinkedHashSet<>();

}
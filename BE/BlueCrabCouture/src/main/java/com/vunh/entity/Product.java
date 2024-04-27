package com.vunh.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Product")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Product {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    @Column(name = "sold")
    private Integer sold;

    @Column(name = "id_image")
    private Integer idImage;

    @Column(name = "is_deleted")
    private Boolean isDeleted;

    @Column(name = "id_user_account")
    private Integer idUserAccount;

    @Column(name = "create_date")
    private Date createDate = new Date();
}

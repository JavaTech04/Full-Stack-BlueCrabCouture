package com.vunh.controller.product;

import com.vunh.entity.Product;
import com.vunh.entity.UserAccount;
import com.vunh.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/product")
public class ProductController_API {
    @Autowired
    private ProductService productService;

    @GetMapping
    List<Product> getAllProduct() {
        return this.productService.getAllProduct();
    }

    @PostMapping
    ResponseEntity<Product> storeProduct(@Validated @RequestBody Product product) {
        return new ResponseEntity<>(this.productService.storeOrUpdateProductAndImage(product), HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    String deleteProductAndImage(@PathVariable Integer id){
        this.productService.deleteProduct(id);
        return "Remove successfully";
    }
}

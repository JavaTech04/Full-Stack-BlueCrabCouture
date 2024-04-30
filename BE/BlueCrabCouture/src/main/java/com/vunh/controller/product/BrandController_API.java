package com.vunh.controller.product;

import com.vunh.entity.Brand;
import com.vunh.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/brand")
public class BrandController_API {
    @Autowired
    private BrandService brandService;

    @GetMapping
    List<Brand> getAllBrand() {
        return this.brandService.getAllBrand();
    }

    @PostMapping
    ResponseEntity<Brand> storeBrand(@RequestBody Brand brand) {
        return new ResponseEntity<>(this.brandService.storeOrUpdateBrand(brand), HttpStatus.CREATED);
    }

    @PutMapping 
    ResponseEntity<Brand> updateBrand(@RequestBody Brand brand) {
        return new ResponseEntity<>(this.brandService.storeOrUpdateBrand(brand), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    String deleteBrand(@PathVariable Integer id) {
        this.brandService.deleteBrand(id);
        return "Remove successfully";
    }

    @GetMapping("/{id}")
    Brand findBrandById(@PathVariable Integer id) {
        return this.brandService.findByID(id).orElse(new Brand());
    }
}

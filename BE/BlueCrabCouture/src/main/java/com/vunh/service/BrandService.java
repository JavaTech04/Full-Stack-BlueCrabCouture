package com.vunh.service;

import com.vunh.entity.Brand;
import com.vunh.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;

    public List<Brand> getAllBrand() {
        return this.brandRepository.findAll();
    }

    public Optional<Brand> findByID(Integer id){
        return this.brandRepository.findById(id);
    }
    public Brand storeOrUpdateBrand(Brand brand){
        return this.brandRepository.save(brand);
    }

    public void deleteBrand(Integer id){
        Optional<Brand> brand = this.findByID(id);
        if(brand.isPresent()){
            this.brandRepository.delete(brand.get());
        }else {
            throw new RuntimeException("Can't remove this brand");
        }
    }

}

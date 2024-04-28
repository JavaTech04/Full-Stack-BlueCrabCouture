package com.vunh.service;

import com.vunh.entity.Image;
import com.vunh.entity.Product;
import com.vunh.repository.ImageRepository;
import com.vunh.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ImageRepository imageRepository;

    public List<Product> getAllProduct() {
        return this.productRepository.findAll();
    }

    private Optional<Image> findImageById(Integer id) {
        return this.imageRepository.findById(id);
    }

    private Optional<Product> findProductById(Integer id) {
        return this.productRepository.findById(id);
    }

    public Product storeOrUpdateProductAndImage(Product product) {
        this.imageRepository.save(product.getImage());
        return this.productRepository.save(product);
    }

    public void deleteProduct(Integer id) {
        Optional<Product> product = this.findProductById(id);
        if (product.isPresent()) {
            this.productRepository.delete(product.get());
            this.imageRepository.delete(product.get().getImage());
        } else {
            throw new RuntimeException("Can't remove this product!");
        }
    }
}

package com.vunh.service;

import com.vunh.entity.Color;
import com.vunh.repository.ColorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ColorService {
    @Autowired
    private ColorRepository colorRepository;

    public List<Color> getAllColors(){
        return this.colorRepository.findAll();
    }

    public Optional<Color> findColorById(Integer id){
        return this.colorRepository.findById(id);
    }

    public Color storeOrUpdateColor(Color color){
        return this.colorRepository.save(color);
    }

    public void deleteColor(Integer id){
        Optional<Color> color = this.findColorById(id);
        if (color.isPresent()) {
            this.colorRepository.delete(color.get());
        } else {
            throw new RuntimeException("Can't remove this color!");
        }
    }
}

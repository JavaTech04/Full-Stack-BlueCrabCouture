package com.vunh.controller.product;

import com.vunh.entity.Color;
import com.vunh.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/color")
public class ColorController_API {
    @Autowired
    private ColorService colorService;

    @GetMapping
    List<Color> getAllColors() {
        return this.colorService.getAllColors();
    }

    @PostMapping
    ResponseEntity<Color> storeColor(@RequestBody Color color) {
        return new ResponseEntity<>(this.colorService.storeOrUpdateColor(color), HttpStatus.CREATED);
    }

    @PutMapping
    ResponseEntity<Color> updateColor(@RequestBody Color color) {
        return new ResponseEntity<>(this.colorService.storeOrUpdateColor(color), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    String deleteColor(@PathVariable Integer id) {
        this.colorService.deleteColor(id);
        return "Remove successfully";
    }

    @GetMapping("/{id}")
    Color findById(@PathVariable Integer id) {
        return this.colorService.findColorById(id).orElse(new Color());
    }
}

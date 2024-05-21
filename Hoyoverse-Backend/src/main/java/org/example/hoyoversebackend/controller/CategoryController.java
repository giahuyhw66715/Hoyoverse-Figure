package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.service.CategoryService;
import org.example.hoyoversebackend.model.Category;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("api/v1/categories")
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @GetMapping("/{id}")
    public Category getCategory(@PathVariable String id) {
        return categoryService.findById(id);
    }

    @PostMapping
    public Category saveCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable String id) {
        categoryService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Category updateCategory(@PathVariable String id, @RequestBody Category category) {
        System.out.println("Category: " + category);
        return categoryService.updateCategory(id, category);
    }
}

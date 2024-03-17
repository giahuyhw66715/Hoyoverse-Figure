package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Category;
import com.hoyoverse.hoyoversebackend.model.request.CustomPageRequest;
import com.hoyoverse.hoyoversebackend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping()
    public Page<Category> getAllCategories(@RequestParam Map<String, String> requestParams) {
        CustomPageRequest customPageRequest = new CustomPageRequest(requestParams);
        Pageable pageable = customPageRequest.handlePagination();
        return categoryService.getAllCategories(pageable);
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable("id") Integer id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping()
    public Category saveCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    @PutMapping("/{id}")
    public Category updateProduct(@PathVariable("id") Integer id, @RequestBody Category category) {
        return categoryService.updateCategory(id, category);
    }

    @DeleteMapping("/{id}")
    public Category deleteCategoryById(@PathVariable("id") Integer id) {
        return categoryService.deleteCategoryById(id);
    }
}

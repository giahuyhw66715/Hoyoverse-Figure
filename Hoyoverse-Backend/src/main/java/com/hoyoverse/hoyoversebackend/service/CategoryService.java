package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Category;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Response<List<Category>> getAllCategories() {
        return new Response<>(Response.SUCCESS, "Get all categories successfully", categoryRepository.findAll());
    }

    public Response<Category> saveCategory(Category category) {
        return new Response<>(Response.SUCCESS, "Save product successfully", categoryRepository.save(category));
    }

    public Response<Category> getCategoryById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get category successfully", categoryRepository.findById(id).orElse(null));
    }

    public Response<Category> deleteCategoryById(Integer id) {
        Category category = categoryRepository.findById(id).orElse(null);
        if (category != null) {
            categoryRepository.deleteById(category.getId());
            return new Response<>(Response.SUCCESS, "Delete category successfully", category);
        }
        return new Response<>(Response.NOT_FOUND, "Category not found");
    }

    public Response<Category> updateCategory(Integer id, Category category) {
        Category existingCategory = categoryRepository.findById(id).orElse(null);
        if (existingCategory != null) {
            existingCategory.setName(category.getName());
            existingCategory.setProducts(category.getProducts());
            return new Response<>(Response.SUCCESS, "Update category successfully", categoryRepository.save(existingCategory));
        }
        return new Response<>(Response.NOT_FOUND, "Category not found");
    }
}

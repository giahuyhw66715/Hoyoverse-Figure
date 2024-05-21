package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.Category;
import org.example.hoyoversebackend.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    public void deleteById(String id) {
        categoryRepository.deleteById(id);
    }

    public Category updateCategory(String id, Category category) {
        Category existedCategory = categoryRepository.findById(id).orElse(null);
        if (existedCategory == null) {
            throw new CustomException("Category not found");
        }
        existedCategory.setName(category.getName());
        return categoryRepository.save(existedCategory);
    }

    public Category findById(String id) {
        return categoryRepository.findById(id).orElse(null);
    }
}

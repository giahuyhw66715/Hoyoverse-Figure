package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Product;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Response<List<Product>> getAllProducts() {
        return new Response<>(Response.SUCCESS, "Get all products successfully", productRepository.findAll());
    }

    public Response<Product> saveProduct(Product product) {
        return new Response<>(Response.SUCCESS, "Save product successfully", productRepository.save(product));
    }

    public Response<Product> getProductById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get product successfully", productRepository.findById(id).orElse(null));
    }

    public Response<Product> deleteProductById(Integer id) {
        Product product = productRepository.findById(id).orElse(null);
        if (product != null) {
            productRepository.deleteById(product.getId());
            return new Response<>(Response.SUCCESS, "Delete product successfully", product);
        }
        return new Response<>(Response.NOT_FOUND, "Product not found");
    }

    public Response<Product> updateProduct(Integer id, Product product) {
        Product existingProduct = productRepository.findById(id).orElse(null);
        if (existingProduct != null) {
            existingProduct.setTitle(product.getTitle());
            existingProduct.setCharacterName(product.getCharacterName());
            existingProduct.setSeries(product.getSeries());
            existingProduct.setRetailPrice(product.getRetailPrice());
            existingProduct.setDiscountPrice(product.getDiscountPrice());
            existingProduct.setSizing(product.getSizing());
            existingProduct.setCategory(product.getCategory());
            existingProduct.setReleaseDate(product.getReleaseDate());
            existingProduct.setTotalQuantity(product.getTotalQuantity());
            existingProduct.setAvailableQuantity(product.getAvailableQuantity());
            return new Response<>(Response.SUCCESS, "Update product successfully", productRepository.save(existingProduct));
        }
        return new Response<>(Response.NOT_FOUND, "Product not found");
    }
}

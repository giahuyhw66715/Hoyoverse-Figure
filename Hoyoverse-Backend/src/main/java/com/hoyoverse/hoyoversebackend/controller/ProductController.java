package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Product;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping()
    public Response<List<Product>> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping()
    public Response<Product> saveProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping("/{id}")
    public Response<Product> getProductById(@PathVariable("id") Integer id) {
        return productService.getProductById(id);
    }

    @DeleteMapping("/{id}")
    public Response<Product> deleteProductById(@PathVariable("id") Integer id) {
        return productService.deleteProductById(id);
    }

    @PutMapping("/{id}")
    public Response<Product> updateProduct(@PathVariable("id") Integer id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }
}

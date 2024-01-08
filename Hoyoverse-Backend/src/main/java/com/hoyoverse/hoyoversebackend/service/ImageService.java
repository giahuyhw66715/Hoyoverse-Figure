package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Image;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;

    public Response<List<Image>> getAllImages() {
        return new Response<>(Response.SUCCESS, "Get all images successfully", imageRepository.findAll());
    }

    public Response<Image> saveImage(Image image) {
        return new Response<>(Response.SUCCESS, "Save image successfully", imageRepository.save(image));
    }

    public Response<Image> getImageById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get image successfully", imageRepository.findById(id).orElse(null));
    }

    public Response<Image> deleteImageById(Integer id) {
        Image image = imageRepository.findById(id).orElse(null);
        if (image != null) {
            imageRepository.deleteById(image.getId());
            return new Response<>(Response.SUCCESS, "Delete image successfully", image);
        }
        return new Response<>(Response.NOT_FOUND, "Image not found");
    }

    public Response<Image> updateImage(Integer id, Image image) {
        Image existingImage = imageRepository.findById(id).orElse(null);
        if (existingImage != null) {
            existingImage.setUrl(image.getUrl());
            return new Response<>(Response.SUCCESS, "Update image successfully", imageRepository.save(existingImage));
        }
        return new Response<>(Response.NOT_FOUND, "Image not found");
    }
}

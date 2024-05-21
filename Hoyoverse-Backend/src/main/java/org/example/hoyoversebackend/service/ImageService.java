package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.Image;
import org.example.hoyoversebackend.repository.ImageRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;

    public List<Image> getImages() {
        return imageRepository.findAll();
    }
    public Image saveImage(Image image) {
        return imageRepository.save(image);
    }

    public void deleteById(String id) {
        imageRepository.deleteById(id);
    }

    public Image updateImage(String id, Image image) {
        Image existedImage = imageRepository.findById(id).orElse(null);
        if (existedImage == null) {
            throw new CustomException("Image not found");
        }
        existedImage.setUrls(image.getUrls());
        return imageRepository.save(existedImage);
    }
}

package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.model.CustomPageRequest;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.Manufacturer;
import org.example.hoyoversebackend.repository.ManufacturerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class ManufacturerService {
    private final ManufacturerRepository manufacturerRepository;

    public Page<Manufacturer> getManufacturers(Map<String, String> params) {
        CustomPageRequest customPageRequest = new CustomPageRequest(params);
        Pageable pageable = customPageRequest.createPageable();
        return manufacturerRepository.findAll(pageable);
    }

    public Manufacturer saveManufacturer(Manufacturer manufacturer) {
        return manufacturerRepository.save(manufacturer);
    }

    public void deleteById(String id) {
        manufacturerRepository.deleteById(id);
    }

    public Manufacturer updateManufacturer(String id, Manufacturer manufacturer) {
        Manufacturer existedManufacturer = manufacturerRepository.findById(id).orElse(null);
        if (existedManufacturer == null) {
            throw new CustomException("Manufacturer not found");
        }
        existedManufacturer.setName(manufacturer.getName());
        return manufacturerRepository.save(existedManufacturer);
    }

    public Manufacturer findById(String id) {
        return manufacturerRepository.findById(id).orElse(null);
    }
}

package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.service.ManufacturerService;
import org.example.hoyoversebackend.model.Manufacturer;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("api/v1/manufacturers")
@RequiredArgsConstructor
public class ManufacturerController {
    private final ManufacturerService manufacturerService;

    @GetMapping
    public Page<Manufacturer> getManufacturers(@RequestParam Map<String, String> params) {
        return manufacturerService.getManufacturers(params);
    }

    @GetMapping("/{id}")
    public Manufacturer getManufacturer(@PathVariable String id) {
        return manufacturerService.findById(id);
    }

    @PostMapping
    public Manufacturer saveManufacturer(@RequestBody Manufacturer manufacturer) {
        return manufacturerService.saveManufacturer(manufacturer);
    }

    @DeleteMapping("/{id}")
    public void deleteManufacturer(@PathVariable String id) {
        manufacturerService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Manufacturer updateManufacturer(@PathVariable String id, @RequestBody Manufacturer manufacturer) {
        return manufacturerService.updateManufacturer(id, manufacturer);
    }
}

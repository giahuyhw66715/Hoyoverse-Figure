package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.Manufacturer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManufacturerRepository extends JpaRepository<Manufacturer, String> {
}

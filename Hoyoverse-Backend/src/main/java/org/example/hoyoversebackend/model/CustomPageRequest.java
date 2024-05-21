package org.example.hoyoversebackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Map;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class CustomPageRequest {
    private int page = 0;
    private int limit = 100;
    private String sortBy = "id";
    private String sortDir = "asc";

    public CustomPageRequest(Map<String, String> params) {
        if (params.containsKey("page")) {
            this.page = Integer.parseInt(params.get("page"));
        }
        if (params.containsKey("limit")) {
            this.limit = Integer.parseInt(params.get("limit"));
        }
        if (params.containsKey("sortBy")) {
            this.sortBy = params.get("sortBy");
        }
        if (params.containsKey("sortDir")) {
            this.sortDir = params.get("sortDir");
        }
    }

    public Pageable createPageable() {
        if (sortDir.equalsIgnoreCase("asc")) {
            return PageRequest.of(page, limit, Sort.by(sortBy).ascending());
        } else {
            return PageRequest.of(page, limit, Sort.by(sortBy).descending());
        }
    }
}

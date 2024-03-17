package com.hoyoverse.hoyoversebackend.model.request;


import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.Map;


@Getter
@AllArgsConstructor

public class CustomPageRequest {
    private int page;
    private int limit;
    private String sortBy;
    private String direction;


    public CustomPageRequest(Map<String, String> requestParams) {
        this.setPage(requestParams.get("page"));
        this.setLimit(requestParams.get("limit"));
        this.setSortBy(requestParams.get("sortBy"));
        this.setDirection(requestParams.get("direction"));
    }

    public void setPage(String page) {
        this.page = (page == null) ? 0 : Integer.parseInt(page);
//        this.page = Integer.parseInt(page);
    }

    public void setLimit(String limit) {
        this.limit = (limit == null) ? 16 : Integer.parseInt(limit);
//        this.limit = Integer.parseInt(limit);
    }

    public void setSortBy(String sortBy) {
        this.sortBy = (sortBy == null) ? "id" : sortBy;
    }

    public void setDirection(String direction) {
        this.direction = (direction == null) ? "ASC" : direction;
    }

    public Pageable handlePagination() {
        if (direction.equalsIgnoreCase("ASC")) {
            return PageRequest.of(page, limit, Sort.by(sortBy));
        }
        return PageRequest.of(page, limit, Sort.by(sortBy).descending());
    }
}

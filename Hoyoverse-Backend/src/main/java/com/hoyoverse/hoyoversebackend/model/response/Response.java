package com.hoyoverse.hoyoversebackend.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Response<T> {
    public static final String SUCCESS = "Success";
    public static final String NOT_FOUND = "Not Found";
    public static final String BAD_REQUEST = "Bad Request";

    private String status;
    private String message;
    private T data;
    private int totalPages;

    public Response(String status, String message) {
        this.status = status;
        this.message = message;
    }

    public Response(String status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.totalPages = 1;
    }
}

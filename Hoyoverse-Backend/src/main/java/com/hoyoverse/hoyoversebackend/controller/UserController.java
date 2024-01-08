package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.model.user.User;
import com.hoyoverse.hoyoversebackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")

public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping()
    public Response<List<User>> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping()
    public Response<User> saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/{id}")
    public Response<User> getUserById(@PathVariable("id") Integer id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/{id}")
    public Response<User> deleteUserById(@PathVariable("id") Integer id) {
        return userService.deleteUserById(id);
    }

    @PutMapping("/{id}")
    public Response<User> updateUser(@PathVariable("id") Integer id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }
}

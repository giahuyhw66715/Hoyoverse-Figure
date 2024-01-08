package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.model.user.User;
import com.hoyoverse.hoyoversebackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Response<List<User>> getAllUsers() {
        return new Response<>(Response.SUCCESS, "Get all users successfully", userRepository.findAll());
    }

    public Response<User> saveUser(User user) {
        return new Response<>(Response.SUCCESS, "Save user successfully", userRepository.save(user));
    }

    public Response<User> getUserById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get user successfully", userRepository.findById(id).orElse(null));
    }

    public Response<User> deleteUserById(Integer id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            userRepository.deleteById(user.getId());
            return new Response<>(Response.SUCCESS, "Delete user successfully", user);
        }
        return new Response<>(Response.NOT_FOUND, "User not found");
    }

    public Response<User> updateUser(Integer id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            existingUser.setFullName(user.getFullName());
            return new Response<>(Response.SUCCESS, "Update user successfully", userRepository.save(existingUser));
        }
        return new Response<>(Response.NOT_FOUND, "User not found");
    }
}

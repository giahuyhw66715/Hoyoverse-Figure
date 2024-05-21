package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.repository.CartRepository;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.User;
import org.example.hoyoversebackend.repository.TokenRepository;
import org.example.hoyoversebackend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final CartRepository cartRepository;
    private final PasswordEncoder passwordEncoder;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public void deleteById(Integer id) {
        tokenRepository.deleteByUserId(id);
        cartRepository.deleteByUserId(id);
        userRepository.deleteById(id);
    }

    public User findById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    public User updateUser(Integer id, User user) {
        User existedUser = userRepository.findById(id).orElse(null);
        if (existedUser == null) {
            throw new CustomException("User not found");
        }
        existedUser.setRole(user.getRole());
        existedUser.setFullName(user.getFullName());
        if (user.getPassword() != null) {
            existedUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        return userRepository.save(existedUser);
    }
}

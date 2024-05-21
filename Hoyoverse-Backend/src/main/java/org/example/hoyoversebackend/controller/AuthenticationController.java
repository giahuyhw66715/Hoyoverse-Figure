package org.example.hoyoversebackend.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.service.AuthenticationService;
import org.example.hoyoversebackend.model.AuthenticationRequest;
import org.example.hoyoversebackend.model.AuthenticationResponse;
import org.example.hoyoversebackend.model.RegisterRequest;
import org.example.hoyoversebackend.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @PostMapping("/refreshToken")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        authenticationService.refreshToken(request, response);
    }

//    @PostMapping("/me")
//    public User me(@RequestBody String accessToken) {
//        return authenticationService.getMe(accessToken);
//    }
    @GetMapping("/me")
    public User me(@RequestParam String accessToken) {
        return authenticationService.getMe(accessToken);
    }
}

package com.sharath.ai_banking_backend.controller;

import com.sharath.ai_banking_backend.dto.LoginRequest;
import com.sharath.ai_banking_backend.dto.RegisterRequest;
import com.sharath.ai_banking_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        System.out.println("REGISTER API HIT");
        System.out.println(request.getName());
        System.out.println(request.getEmail());

        return userService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        System.out.println("LOGIN API HIT");
        System.out.println(request.getEmail());

        return userService.login(request);
    }
}
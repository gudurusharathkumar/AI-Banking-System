package com.sharath.ai_banking_backend.service;

import com.sharath.ai_banking_backend.dto.LoginRequest;
import com.sharath.ai_banking_backend.dto.RegisterRequest;
import com.sharath.ai_banking_backend.entity.User;
import com.sharath.ai_banking_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String register(RegisterRequest request) {

        User existingUser =
                userRepository.findByEmail(request.getEmail()).orElse(null);

        if (existingUser != null) {
            return "Email Already Exists";
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public String login(LoginRequest request) {

        User user =
                userRepository.findByEmail(request.getEmail()).orElse(null);

        if (user == null) {
            return "User Not Found";
        }

        if (!user.getPassword().equals(request.getPassword())) {
            return "Invalid Password";
        }

        return user.getName();
    }
}
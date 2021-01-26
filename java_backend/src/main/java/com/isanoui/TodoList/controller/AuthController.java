package com.isanoui.TodoList.controller;

import java.util.List;

import com.isanoui.TodoList.model.User;
import com.isanoui.TodoList.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// To link with React server
@CrossOrigin(origins = "https://festive-chandrasekhar-e40420.netlify.app")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/loginOrSignup")
    public User loginOrSignup(@RequestBody User user) {
        List<User> users = userRepository.findAll();
        for (User currUser : users) {
            if (currUser.getName().equals(user.getName()) && currUser.getPassword().equals(user.getPassword())) {
                return currUser;
            }
        }
        // Add user if user doesn't exist
        return this.userRepository.save(user);
    }

}

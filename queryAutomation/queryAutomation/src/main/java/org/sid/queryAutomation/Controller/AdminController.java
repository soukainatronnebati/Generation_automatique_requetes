package org.sid.queryAutomation.Controller;

import lombok.AllArgsConstructor;
import org.sid.queryAutomation.Security.auth.AuthenticationService;
import org.sid.queryAutomation.Security.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@AllArgsConstructor
public class AdminController {


    private AuthenticationService service;
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return service.getAllUsers();
    }
}

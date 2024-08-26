package org.sid.queryAutomation.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class IngenieurSupport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ingenieurid;

    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;

    // Getters and setters
    public void seConnecter() {
        // Implementation
    }
}

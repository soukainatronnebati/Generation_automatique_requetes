package org.sid.queryAutomation.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "EmailSIU")
@Data
@NoArgsConstructor
public class ModifEmailSIU {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "numDemande")
    private String numDemande;

    @Column(name = "siud")
    private String siud;

    @Column(name = "email")
    private String email;

    // Getters and Setters
}

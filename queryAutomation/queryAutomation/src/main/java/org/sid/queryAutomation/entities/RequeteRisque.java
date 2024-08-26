package org.sid.queryAutomation.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
@Table(name = "Requetes")
public class RequeteRisque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String namerequete;
    private String application;
    private String Requete ;
    private boolean a_risque;
    private String solution;

    // Getters and setters

}

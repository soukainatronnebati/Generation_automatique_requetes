package org.sid.queryAutomation.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
public class Historique {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historiqueid;

    private Date dateCreation;
    private String nomUtilisateur;
    private String tachesRealiser;
    private String description;

    @ManyToOne
    @JoinColumn(name = "demande_id")
    private Demande demande;

    // Getters and setters

}

package org.sid.queryAutomation.entities;


import jakarta.persistence.*;
import lombok.*;
import org.sid.queryAutomation.Security.user.User;
import org.sid.queryAutomation.enums.TypeDemandeEnum;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;

public class demd {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long demandeid;



    private String titredemande;

    @Enumerated(EnumType.STRING)
    private TypeDemandeEnum typedemande;

    private Long templateRequeteId;
    private String historique;

    @OneToMany(mappedBy = "demande")
    private List<Historique> historiques;

    // Getters and setters

   /* public void addHistorique(Historique historique) {
        this.historiques.add(historique);
        historique.setDemande(this);
    }*/


}



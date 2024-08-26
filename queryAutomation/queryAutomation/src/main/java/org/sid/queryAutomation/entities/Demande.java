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

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "demandes") // nom de table en minuscule
public class Demande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //private Long demandeid;
    private Long id;


    private String NumeroDemande;

    @Column(nullable = false)
    private LocalDateTime dateCreation;


    private String typeDemande;

    private String utilisateur;

    @PrePersist
    protected void onCreate() {
        this.dateCreation = LocalDateTime.now();
    }
}


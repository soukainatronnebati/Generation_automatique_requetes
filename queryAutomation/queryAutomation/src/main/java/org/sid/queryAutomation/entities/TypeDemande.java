package org.sid.queryAutomation.entities;

import jakarta.persistence.*;
import org.sid.queryAutomation.enums.TypeDemandeEnum;

@Entity
@Table(name = "TypeDemande")
public class TypeDemande {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long typeld;

        @Enumerated(EnumType.STRING)
        private TypeDemandeEnum typedemande;

        // Getters and setters

}

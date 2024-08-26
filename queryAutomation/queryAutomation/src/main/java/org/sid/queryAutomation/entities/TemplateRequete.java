package org.sid.queryAutomation.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
@Table(name = "template")
public class TemplateRequete {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idtemp;

    private String typetemp;

    private String nomDemande;

    private String Requetes;

    @Lob
    @Column(name = "modop_file", nullable = false, columnDefinition = "LONGBLOB")
    private byte[] modopFile;
}

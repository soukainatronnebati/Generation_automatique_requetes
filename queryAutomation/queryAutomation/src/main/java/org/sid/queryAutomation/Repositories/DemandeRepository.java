package org.sid.queryAutomation.Repositories;

import org.sid.queryAutomation.entities.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DemandeRepository extends JpaRepository<Demande, Long> {

    @Query("SELECT d.utilisateur, COUNT(d) FROM Demande d GROUP BY d.utilisateur")
    List<Object[]> countDemandesParUtilisateur();
}


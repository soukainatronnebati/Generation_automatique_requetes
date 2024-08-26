package org.sid.queryAutomation.Repositories;

import org.sid.queryAutomation.entities.Historique;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HistoriqueRepository extends JpaRepository<Historique, Long> {

    @Query("SELECT h.nomUtilisateur, COUNT(h) FROM Historique h GROUP BY h.nomUtilisateur")
    List<Object[]> countDemandesParUtilisateur();
}

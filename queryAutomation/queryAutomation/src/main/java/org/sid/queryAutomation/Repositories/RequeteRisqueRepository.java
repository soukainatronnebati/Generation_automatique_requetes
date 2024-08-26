package org.sid.queryAutomation.Repositories;

import org.sid.queryAutomation.entities.RequeteRisque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RequeteRisqueRepository extends JpaRepository<RequeteRisque, Long> {
    @Query("SELECT r FROM RequeteRisque r WHERE TRIM(LOWER(r.namerequete)) = TRIM(LOWER(:namerequete))")
    Optional<RequeteRisque> findByRequeteIgnoreCaseAndTrim(String namerequete);

    @Query("SELECT r FROM RequeteRisque r WHERE " +
            "(:aRisque IS NULL OR r.a_risque = :aRisque) AND " +
            "(:application IS NULL OR LOWER(r.application) = LOWER(:application)) AND " +
            "(:namerequete IS NULL OR LOWER(r.namerequete) LIKE LOWER(CONCAT(:namerequete, '%')))")
    List<RequeteRisque> findByFilters(@Param("aRisque") Boolean aRisque,
                                      @Param("application") String application,
                                      @Param("namerequete") String namerequete);
}
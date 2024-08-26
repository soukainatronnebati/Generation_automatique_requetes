package org.sid.queryAutomation.Repositories;

import org.sid.queryAutomation.entities.reqProd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReqProdRepository extends JpaRepository<reqProd, Long> {

    @Query("SELECT r FROM reqProd r WHERE TRIM(LOWER(r.nom)) = TRIM(LOWER(:nom))")
    Optional<reqProd> findByRequeteIgnoreCaseAndTrim(@Param("nom") String nom);

    @Query("SELECT r FROM reqProd r WHERE " +
            "(:application IS NULL OR LOWER(r.application) = LOWER(:application)) AND " +
            "(:nom IS NULL OR LOWER(r.nom) LIKE LOWER(CONCAT('%', :nom, '%')))")
    List<reqProd> findByFilters(@Param("application") String application,
                                @Param("nom") String nom);
}

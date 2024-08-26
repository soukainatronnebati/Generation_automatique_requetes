package org.sid.queryAutomation.service;

import org.sid.queryAutomation.Repositories.DemandeRepository;
import org.sid.queryAutomation.entities.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DemandeService {

    @Autowired
    private DemandeRepository demandeRepository;

    public List<Demande> getAllDemandes() {
        return demandeRepository.findAll();
    }

    public Demande saveDemande(Demande demande) {
        if (demande.getDateCreation() == null) {
            demande.setDateCreation(LocalDateTime.now());
        }
        return demandeRepository.save(demande);
    }


    public Optional<Demande> getDemandeById(Long id) {
        return demandeRepository.findById(id);
    }

    public Map<String, Long> countDemandesParUtilisateur() {
        List<Object[]> result = demandeRepository.countDemandesParUtilisateur();
        return result.stream().collect(Collectors.toMap(
                row -> (String) row[0],
                row -> (Long) row[1]
        ));
    }
}
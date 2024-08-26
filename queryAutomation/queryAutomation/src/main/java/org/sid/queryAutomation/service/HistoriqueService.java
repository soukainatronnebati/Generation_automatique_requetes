package org.sid.queryAutomation.service;

import org.sid.queryAutomation.Repositories.DemandeRepository;
import org.sid.queryAutomation.Repositories.HistoriqueRepository;
import org.sid.queryAutomation.entities.Historique;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HistoriqueService {

    @Autowired
    private HistoriqueRepository historiqueRepository;

    public Historique saveHistorique(Historique historique) {
        return historiqueRepository.save(historique);
    }

    public List<Historique> getAllHistoriques() {
        return historiqueRepository.findAll();
    }

    public Optional<Historique> getHistoriqueById(Long id) {
        return historiqueRepository.findById(id);
    }

    public Map<String, Long> countDemandesParUtilisateur() {
        List<Object[]> result = historiqueRepository.countDemandesParUtilisateur();
        return result.stream().collect(Collectors.toMap(
                row -> (String) row[0],
                row -> (Long) row[1]
        ));
    }
}

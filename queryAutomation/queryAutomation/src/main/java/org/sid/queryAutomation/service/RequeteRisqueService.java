package org.sid.queryAutomation.service;

import org.sid.queryAutomation.Repositories.RequeteRisqueRepository;
import org.sid.queryAutomation.entities.RequeteRisque;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequeteRisqueService {
    @Autowired
    private RequeteRisqueRepository requeteRisqueRepository;

    public List<RequeteRisque> findAll() {

        return requeteRisqueRepository.findAll();
    }

    public Optional<RequeteRisque> findByRequete(String namerequete) {
        return requeteRisqueRepository.findByRequeteIgnoreCaseAndTrim(namerequete);
    }

    public List<RequeteRisque> findByFilters(Boolean aRisque, String application, String namerequete) {
        return requeteRisqueRepository.findByFilters(aRisque, application, namerequete);
    }
    public RequeteRisque saveRequete(RequeteRisque requeteRisque) {
        return requeteRisqueRepository.save(requeteRisque);
    }

    public RequeteRisque updateRequeteRisque(Long id, RequeteRisque updatedRequete) {
        Optional<RequeteRisque> existingRequeteOpt = requeteRisqueRepository.findById(id);
        if (existingRequeteOpt.isPresent()) {
            RequeteRisque existingRequete = existingRequeteOpt.get();
            existingRequete.setNamerequete(updatedRequete.getNamerequete());
            existingRequete.setApplication(updatedRequete.getApplication());
            existingRequete.setRequete(updatedRequete.getRequete());
            existingRequete.setA_risque(updatedRequete.isA_risque());
            existingRequete.setSolution(updatedRequete.getSolution());
            return requeteRisqueRepository.save(existingRequete);
        } else {
            throw new ResourceNotFoundException("RequeteRisque not found with id " + id);
        }
    }

    public void deleteRequeteRisque(Long id) {
        if (requeteRisqueRepository.existsById(id)) {
            requeteRisqueRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("RequeteRisque not found with id " + id);
        }
    }
}

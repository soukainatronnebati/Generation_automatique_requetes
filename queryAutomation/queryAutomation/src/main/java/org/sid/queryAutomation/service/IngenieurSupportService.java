package org.sid.queryAutomation.service;

import org.sid.queryAutomation.Repositories.IngenieurSupportRepository;
import org.sid.queryAutomation.entities.IngenieurSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngenieurSupportService {

    @Autowired
    private IngenieurSupportRepository ingenieurSupportRepository;

    public IngenieurSupport saveIngenieurDuSupport(IngenieurSupport ingenieur) {
        return ingenieurSupportRepository.save(ingenieur);
    }

    public List<IngenieurSupport> getAllIngenieurs() {
        return ingenieurSupportRepository.findAll();
    }

    public Optional<IngenieurSupport> getIngenieurById(Long id) {
        return ingenieurSupportRepository.findById(id);
    }
}

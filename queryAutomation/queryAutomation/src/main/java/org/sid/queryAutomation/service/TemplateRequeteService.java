package org.sid.queryAutomation.service;

import org.sid.queryAutomation.Repositories.TemplateRequeteRepository;
import org.sid.queryAutomation.entities.TemplateRequete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TemplateRequeteService {
    @Autowired
    private TemplateRequeteRepository templateRequeteRepository;

    public TemplateRequete saveTemplateRequete(TemplateRequete templateRequete) {
        return templateRequeteRepository.save(templateRequete);
    }

    public List<TemplateRequete> getAllTemplatesRequete() {
        return templateRequeteRepository.findAll();
    }

    public Optional<TemplateRequete> getTemplateRequeteById(Long id) {
        return templateRequeteRepository.findById(id);
    }
}

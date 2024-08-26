package org.sid.queryAutomation.service;

import org.sid.queryAutomation.Repositories.ReqProdRepository;
import org.sid.queryAutomation.entities.reqProd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReqProdService{

    private final ReqProdRepository repository;
    @Autowired
    public ReqProdService(ReqProdRepository repository) {
        this.repository = repository;
    }
    public List<reqProd> getAllRequetes() {
        return repository.findAll();
    }

    public List<reqProd> getRequetesByFilters(String application, String nom) {
        return repository.findByFilters(application, nom);
    }
}

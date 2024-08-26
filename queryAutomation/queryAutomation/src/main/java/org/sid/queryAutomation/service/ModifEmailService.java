package org.sid.queryAutomation.service;

import org.sid.queryAutomation.Repositories.ModifEmailRepository;
import org.sid.queryAutomation.entities.ModifEmailSIU;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModifEmailService {

    @Autowired
    private static ModifEmailRepository requestRepository;

    public static ModifEmailSIU saveRequest1(ModifEmailSIU request) {
        return requestRepository.save(request);
    }
}

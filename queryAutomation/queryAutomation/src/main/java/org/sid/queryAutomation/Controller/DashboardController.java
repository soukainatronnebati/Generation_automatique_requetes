package org.sid.queryAutomation.Controller;

import org.sid.queryAutomation.service.DemandeService;
import org.sid.queryAutomation.service.HistoriqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class DashboardController {

    @Autowired
    private DemandeService demandeService;

    @GetMapping("/demande-par-utilisateur")
    public ResponseEntity<Map<String, Long>> getDemandeParUtilisateur() {
        Map<String, Long> result = demandeService.countDemandesParUtilisateur();
        return ResponseEntity.ok(result);
    }
}

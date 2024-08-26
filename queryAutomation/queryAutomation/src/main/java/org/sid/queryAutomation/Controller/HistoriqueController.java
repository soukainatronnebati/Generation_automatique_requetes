package org.sid.queryAutomation.Controller;

import org.sid.queryAutomation.Security.auth.AuthenticationService;
import org.sid.queryAutomation.Security.user.User;
import org.sid.queryAutomation.entities.Historique;
import org.sid.queryAutomation.service.HistoriqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/historiques")
public class HistoriqueController {

    @Autowired
    private AuthenticationService service;

    @Autowired
    private HistoriqueService historiqueService;

    @PostMapping
    public Historique createHistorique(@RequestBody Historique historique) {
        return historiqueService.saveHistorique(historique);
    }

    @GetMapping
    public List<Historique> getAllHistoriques() {
        return historiqueService.getAllHistoriques();
    }



    @GetMapping("/{id}")
    public ResponseEntity<Historique> getHistoriqueById(@PathVariable Long id) {
        Optional<Historique> historique = historiqueService.getHistoriqueById(id);
        return historique.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

package org.sid.queryAutomation.Controller;

import org.sid.queryAutomation.entities.IngenieurSupport;
import org.sid.queryAutomation.service.IngenieurSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ingenieurs")
public class IngenieurSupportController {

    @Autowired
    private IngenieurSupportService ingenieurSupportService;

    @PostMapping
    public IngenieurSupport createIngenieur(@RequestBody IngenieurSupport ingenieur) {
        return ingenieurSupportService.saveIngenieurDuSupport(ingenieur);
    }

    @GetMapping
    public List<IngenieurSupport> getAllIngenieurs() {
        return ingenieurSupportService.getAllIngenieurs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IngenieurSupport> getIngenieurById(@PathVariable Long id) {
        Optional<IngenieurSupport> ingenieur = ingenieurSupportService.getIngenieurById(id);
        return ingenieur.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

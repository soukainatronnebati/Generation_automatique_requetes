package org.sid.queryAutomation.Controller;

import org.sid.queryAutomation.Repositories.RequeteRisqueRepository;
import org.sid.queryAutomation.entities.RequeteRisque;
import org.sid.queryAutomation.service.RequeteRisqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class RequeteRisqueController {
    @Autowired
    private RequeteRisqueService requeteRisqueService;

    @Autowired
    private RequeteRisqueRepository requeteRisqueRepository;

    @GetMapping("/requetesrisque")
    public List<RequeteRisque> getAllRequetes() {
        return requeteRisqueService.findAll();
    }

    @GetMapping("/requetesrisque/filtered")
    public List<RequeteRisque> getFilteredRequetes(@RequestParam(required = false) Boolean aRisque,
                                                   @RequestParam(required = false) String application,
                                                   @RequestParam(required = false) String namerequete) {
        return requeteRisqueService.findByFilters(aRisque, application, namerequete);
    }

    @GetMapping("/requetesrisque/download/{id}")
    public ResponseEntity<byte[]> downloadReqProd(@PathVariable Long id) {
        RequeteRisque requeteRisque = requeteRisqueRepository.findById(id).orElse(null);
        if (requeteRisque == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        String filename = requeteRisque.getNamerequete() + ".sql";

        byte[] content = requeteRisque.getRequete().getBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"");
        headers.set(HttpHeaders.CONTENT_TYPE, "application/octet-stream");

        return new ResponseEntity<>(content, headers, HttpStatus.OK);
    }
    @PostMapping("/requetesrisque")
    public RequeteRisque createRequete(@RequestBody RequeteRisque requeteRisque) {
        return requeteRisqueService.saveRequete(requeteRisque);
    }

    @GetMapping("/requetesrisque/{id}")
    public Optional<RequeteRisque> getRequeteById(@PathVariable Long id) {
        return requeteRisqueRepository.findById(id);

    }
    @PutMapping("/requetesrisque/{id}")
    public ResponseEntity<RequeteRisque> updateRequeteRisque(@PathVariable Long id, @RequestBody RequeteRisque requeteRisque) {
        RequeteRisque updatedRequete = requeteRisqueService.updateRequeteRisque(id, requeteRisque);
        return ResponseEntity.ok(updatedRequete);
    }

    @DeleteMapping("/requetesrisque/{id}")
    public ResponseEntity<Void> deleteRequeteRisque(@PathVariable Long id) {
        requeteRisqueService.deleteRequeteRisque(id);
        return ResponseEntity.noContent().build();
    }
}
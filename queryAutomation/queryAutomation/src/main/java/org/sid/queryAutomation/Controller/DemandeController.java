package org.sid.queryAutomation.Controller;

import jakarta.annotation.Resource;
import org.sid.queryAutomation.Repositories.DemandeRepository;
import org.sid.queryAutomation.entities.Demande;
import org.sid.queryAutomation.entities.ModifEmailSIU;
import org.sid.queryAutomation.service.DemandeService;
import org.sid.queryAutomation.service.ModifEmailService;
import org.sid.queryAutomation.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/demandes")
public class DemandeController {
    private static final String UPLOAD_DIR = "uploads/";
    @Autowired
    private DemandeRepository demandeRepository;
    @Autowired
    private DemandeService demandeService;
    @PostMapping("/save")
    public ResponseEntity<Demande> saveDemande(@RequestBody Demande demande) {
        Demande savedDemande = demandeService.saveDemande(demande);
        return ResponseEntity.ok(savedDemande);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Demande>> getAllDemandes() {
        List<Demande> demandes = demandeService.getAllDemandes();
        return ResponseEntity.ok(demandes);
    }

    @PostMapping("/{id}/upload")
    public ResponseEntity<String> uploadFile(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        Optional<Demande> demandeOptional = demandeRepository.findById(id);

        if (!demandeOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Demande demande = demandeOptional.get();

        try {
            byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOAD_DIR + file.getOriginalFilename());
            Files.write(path, bytes);

            demande.setNumeroDemande(path.toString()); // Utilisez le champ approprié pour stocker le chemin du fichier
            demandeRepository.save(demande);

            return ResponseEntity.ok("Fichier uploadé avec succès");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erreur lors de l'upload du fichier");
        }
    }

 /*   @GetMapping("/{id}/download")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long id) {
        Optional<Demande> demandeOptional = demandeRepository.findById(id);

        if (!demandeOptional.isPresent() || demandeOptional.get().getNumeroDemande() == null) {
            return ResponseEntity.notFound().build();
        }

        Demande demande = demandeOptional.get();
        Path path = Paths.get(demande.getNumeroDemande());

        try {
            InputStreamResource resource = new InputStreamResource(Files.newInputStream(path));
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + path.getFileName().toString());

            return ResponseEntity.ok()
                    .headers(headers)
                    .contentLength(Files.size(path))
                    .body(resource);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
*/


  /*

    @GetMapping("/{id}")
    public ResponseEntity<Demande> getDemandeById(@PathVariable Long id) {
        Optional<Demande> demande = demandeService.getDemandeById(id);
        return demande.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }*/
    // Endpoint to update a demande
  /*  @PutMapping("/{id}")
    public ResponseEntity<Demande> updateDemande(@PathVariable Long id, @RequestBody Demande demande) {
        Demande updatedDemande = demandeService.updateDemande(id, demande);
        return ResponseEntity.ok(updatedDemande);
    }*/

    // Endpoint to delete a demande
  /*  @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDemande(@PathVariable Long id) {
        demandeService.deleteDemande(id);
        return ResponseEntity.noContent().build();
    }*/
}

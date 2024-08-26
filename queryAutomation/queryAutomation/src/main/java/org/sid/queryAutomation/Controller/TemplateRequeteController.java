package org.sid.queryAutomation.Controller;

import org.sid.queryAutomation.Repositories.ReqProdRepository;
import org.sid.queryAutomation.Repositories.TemplateRequeteRepository;
import org.sid.queryAutomation.entities.TemplateRequete;
import org.sid.queryAutomation.entities.reqProd;
import org.sid.queryAutomation.service.TemplateRequeteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;



@RestController
@RequestMapping("/api/template")
@CrossOrigin(origins = "http://localhost:4200")
public class TemplateRequeteController {
    @Autowired
    private TemplateRequeteService templateRequeteService;

    @Autowired
    private TemplateRequeteRepository templateRequeteRepository;

    @PostMapping("/save")
    public TemplateRequete createTemplateRequete(@RequestParam("typetemp") String typetemp,
                                                 @RequestParam("nomDemande") String nomDemande,
                                                 @RequestParam("requetes") String requetes,
                                                 @RequestParam("modopFile") MultipartFile modopFile) throws IOException {
        TemplateRequete templateRequete = new TemplateRequete();
        templateRequete.setTypetemp(typetemp);
        templateRequete.setNomDemande(nomDemande);
        templateRequete.setRequetes(requetes);
        templateRequete.setModopFile(modopFile.getBytes());
        return templateRequeteService.saveTemplateRequete(templateRequete);
    }

    @GetMapping("/list")
    public List<TemplateRequete> getAllTemplatesRequete() {
        return templateRequeteService.getAllTemplatesRequete();
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadTemplate(@PathVariable Long id) {
        TemplateRequete templateRequete = templateRequeteRepository.findById(id).orElse(null);
        if (templateRequete == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        String filename = templateRequete.getNomDemande() + ".txt";
        byte[] content = templateRequete.getRequetes().getBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"");
        headers.set(HttpHeaders.CONTENT_TYPE, "application/octet-stream");

        return new ResponseEntity<>(content, headers, HttpStatus.OK);
    }

    @GetMapping("/downloadModop/{id}")
    public ResponseEntity<byte[]> downloadModop(@PathVariable Long id) {
        TemplateRequete templateRequete = templateRequeteRepository.findById(id).orElse(null);
        if (templateRequete == null || templateRequete.getModopFile() == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        String filename = templateRequete.getNomDemande() + ".docx";

        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"");
        headers.set(HttpHeaders.CONTENT_TYPE, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

        return new ResponseEntity<>(templateRequete.getModopFile(), headers, HttpStatus.OK);
    }
}
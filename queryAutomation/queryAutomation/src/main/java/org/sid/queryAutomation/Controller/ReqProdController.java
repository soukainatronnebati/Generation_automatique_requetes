package org.sid.queryAutomation.Controller;

import org.sid.queryAutomation.Repositories.ReqProdRepository;
import org.sid.queryAutomation.entities.reqProd;
import org.sid.queryAutomation.service.ReqProdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/req_prod")
@CrossOrigin(origins = "http://localhost:4200")
public class ReqProdController {
    @Autowired
    private ReqProdRepository reqProdRepository;

    private final ReqProdService service;

    @Autowired
    public ReqProdController(ReqProdService service) {
        this.service = service;
    }
    @GetMapping
    public List<reqProd> getAllReqProds() {
        return reqProdRepository.findAll();
    }
    @GetMapping("/download/{id}")
    public ResponseEntity<byte[]> downloadReqProd(@PathVariable Long id) {
        reqProd reqprod = reqProdRepository.findById(id).orElse(null);
        if (reqprod == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        String filename = reqprod.getNom() + ".sql";

        byte[] content = reqprod.getRequete().getBytes();

        HttpHeaders headers = new HttpHeaders();
        headers.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + filename + "\"");
        headers.set(HttpHeaders.CONTENT_TYPE, "application/octet-stream");

        return new ResponseEntity<>(content, headers, HttpStatus.OK);
    }

    @GetMapping("/filtered")
    public List<reqProd> getRequetesByFilters(
            @RequestParam(required = false) String application,
            @RequestParam(required = false) String nom) {
        return service.getRequetesByFilters(application, nom);
    }
    @PostMapping("/save")
    public ResponseEntity<reqProd> createNewReqProd(@RequestBody reqProd newReqProd) {
        reqProd savedReqProd = reqProdRepository.save(newReqProd);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedReqProd);
    }
}

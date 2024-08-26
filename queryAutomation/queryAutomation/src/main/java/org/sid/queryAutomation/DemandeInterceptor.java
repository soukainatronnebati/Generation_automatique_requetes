package org.sid.queryAutomation;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.sid.queryAutomation.entities.Demande;
import org.sid.queryAutomation.service.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import java.time.LocalDateTime;

@Component
public class DemandeInterceptor  implements HandlerInterceptor {

    @Autowired
    private DemandeService demandeService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String numeroDemande = request.getParameter("numeroDemande");
        String typeDemande = (String) request.getSession().getAttribute("typeDemande");
        String creator = request.getRemoteUser(); // Assuming Spring Security is configured
        LocalDateTime createdAt = LocalDateTime.now();

        if (numeroDemande != null && typeDemande != null) {
            Demande demande = new Demande();
            demande.setNumeroDemande(numeroDemande);
            demande.setTypeDemande(typeDemande);
            demande.setUtilisateur(creator != null ? creator : "anonymousUser");
            demande.setDateCreation(createdAt);

            demandeService.saveDemande(demande);
        }

        return true;
    }
}

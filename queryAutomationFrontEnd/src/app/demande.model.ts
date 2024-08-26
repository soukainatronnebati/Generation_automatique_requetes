//path : D:\Génération automatique des requêtes\Frontend\queryAutomationFrontEnd\src\app\demande.model.ts
export interface Demande {
  id?: number; // L'ID est facultatif ici car il est généré par la base de données
  numeroDemande: string;
  typeDemande: string;
  utilisateur: string;
  dateCreation?: Date; // Le point d'interrogation indique que ce champ est optionnel
}

import express from "express";
import bodyParser from "body-parser";
import { Employes } from "./Employes.js";
import { Taches } from "./Taches.js";
import { Assignation } from "./Assignations.js";

const app = express();
const port = 3050;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/app", (req, res) => {
    const e1 = new Employes();
    e1.createEmploye({
      nom: "Diop",
      prenom: "Mamadou",
      email: "mamadou.diop@gmail.com",
      poste: "Développeur Backend",
      dateEmbauche: "15-03-2024",
      statut: "CDI",
    });
    
    const e2 = new Employes();
    e2.createEmploye({
      nom: "Ba",
      prenom: "Salimata",
      email: "salimata.ba@gmail.com",
      poste: "Chef de projet",
      dateEmbauche: "05-01-2024",
      statut: "CDI",
    });
    
    const e3 = new Employes();
    e3.createEmploye({
      nom: "Ndiaye",
      prenom: "Alioune",
      email: "alioune.ndiaye@gmail.com",
      poste: "Designer UI/UX",
      dateEmbauche: "22-08-2024",
      statut: "CDD",
    });

    const t1 = new Taches();
t1.createTache({
  nom: "Développement API REST",
  description: "Créer l'API REST pour les fonctionnalités principales",
  dateDebut: "01-04-2024",
  dateFin: "01-10-2024",
  statut: "En cours",
  priorite: "Élevée",
});

const t2 = new Taches();
t2.createTache({
  nom: "Tests unitaires",
  description: "Écrire des tests unitaires pour l'ensemble du code",
  dateDebut: "01-05-2024",
  dateFin: "01-08-2024",
  statut: "A faire",
  priorite: "Moyenne",
});

const t3 = new Taches();
t3.createTache({
  nom: "Révision du code",
  description: "Vérifier et optimiser le code existant",
  dateDebut: "10-07-2024",
  dateFin: "10-09-2024",
  statut: "En cours",
  priorite: "Élevée",
});

    
  console.log("**************")

  Assignation.assign({employe: e1.getEmploye(), tache: t1.getTache(), dateAssignation: new Date()})
  Assignation.assign({employe: e2.getEmploye(), tache: t2.getTache(), dateAssignation: new Date()})
  Assignation.assign({employe: e3.getEmploye(), tache: t3.getTache(), dateAssignation: new Date()})

  const assignation = Assignation.getTab()
  const resulFiltre = Assignation.getEmpAssign(e1.getEmploye());

  const newAssignation = Assignation.getTab()

  const testEcrase = Assignation.getTab()
  
  res.status(200).json({newAssignation, testEcrase, resulFiltre});
});

app.listen(port, () => {
  console.log("Successfully connected");
});
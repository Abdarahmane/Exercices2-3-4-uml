 class Employes {
    createEmploye(employe) {
      this.id = employe.id;
      this.nom = employe.nom;
      this.prenom = employe.prenom;
      this.email = employe.email;
      this.poste = employe.poste;
      this.dateEmbauche = new Date(employe.dateEmbauche);
      this.statut = employe.statut;
      console.log(
        `Employe: ${this.nom} ${this.prenom}, Email: ${this.email}, Poste: ${this.poste}, Date d'embauche: ${this.dateEmbauche.toLocaleDateString()}, Statut: ${this.statut} a été créé`
      );
    }
  
    
    destroyEmploye() {
      console.log(`Employe: ${this.nom} ${this.prenom} a été supprimé`);
    }
  
    
    editEmploye(newEmploye) {
      this.nom = newEmploye.nom ;
      this.prenom = newEmploye.prenom ;
      this.email = newEmploye.email ;
      this.poste = newEmploye.poste ;
      this.dateEmbauche = newEmploye.dateEmbauche ? new Date(newEmploye.dateEmbauche) : this.dateEmbauche;
      this.statut = newEmploye.statut ;
      console.log(
        `Employe: ${this.nom} ${this.prenom}, Email: ${this.email}, Poste: ${this.poste}, Date d'embauche: ${this.dateEmbauche.toLocaleDateString()}, Statut: ${this.statut} a été mis à jour`
      );
    }
  
    
    getEmploye() {
      console.log(
        `Employe: ${this.nom} ${this.prenom}, Email: ${this.email}, Poste: ${this.poste}, Date d'embauche: ${this.dateEmbauche.toLocaleDateString()}, Statut: ${this.statut}`
      );
      return {
        id: this.id,
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        poste: this.poste,
        dateEmbauche: this.dateEmbauche,
        statut: this.statut,
      };
    }
  }
  export { Employes } ;
  
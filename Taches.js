 class Taches {
  
    createTache(tache) {
      this.name = tache.name;
      this.description = tache.description;
      this.dateDebut = tache.dateDebut;
      this.dateFin = tache.dateFin;
      this.statut = tache.statut;
      this.priorite = tache.priorite;
      console.log(`Tache: ${this.name}, ${this.description}, ${this.dateDebut}, ${this.dateFin } ,${this.priorite}has been created`);
    }
  
    destroyTache() {
      console.log(`Taches: ${this.name}, ${this.description} , ${this.dateDebut}, ${this.dateFin },${this.priorite}has been deleted`);
    }
  
    editTache(newTache) {
      this.name = newTache.name;
      this.description = newTache.description;
      this.dateDebut = newTache.dateDebut;
      this.dateFin = newTache.dateFin;
      this.statut = newTache.statut;
      this.priorite = newTache.priorite;
      console.log(`Tache: ${this.name}, ${this.description} , ${this.dateDebut}, ${this.dateFin },${this.statut},${this.priorite} has been updated`);
    }
    getTache() {
      console.log(`Tache:  ${this.name}, ${this.description} , ${this.dateDebut}, ${this.dateFin },${this.statut},${this.priorite}`);
      return { 
        name: this.name,
        description: this.description,
        dateDebut: this.dateDebut,
        dateFin: this.dateFin,
        dateEmbauche: this.dateEmbauche,
        statut: this.statut,
        priorite: this.priorite,

       };
    }
  }
 export { Taches } ;
  
 
class Assignation {
  static arrayAssignation = [];


  static getTab(){
    return Assignation.arrayAssignation;
  }
  static assign({ employe, tache, dateAssignation }) {
    Assignation.arrayAssignation.push({ employe, tache, dateAssignation });
  }

  static dropAssign(employe) {
    if (employe) {
      Assignation.arrayAssignation = Assignation.arrayAssignation.filter(
        (emp) => {
          return emp.employe.nom !== employe.nom
        }
      );
    }
  }

  static getEmpAssign(employe) {
    console.log(`${employe} existe`)
    if (employe) {
      return Assignation.arrayAssignation
        .filter(emp => emp.employe.nom === employe.nom)
        .map(ass => {
          return {
            tache: ass.tache,
            dateAssignation: ass.dateAssignation,
          };
        });
    }
  }

  static getTacheAssign(tache) {
    if (tache) {
      Assignation.arrayAssignation = Assignation.arrayAssignation
        .filter((tsk) => tsk.tache === tache)
        .map((ass) => {
          return {
            employe: ass.employe
          };
        });
    }
  }
}
export { Assignation };
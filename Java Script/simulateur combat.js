class Combattant {
    constructor(nom, PV, attaque, precision) {
        this.nom = nom;
        this.PV = PV;
        this.attaque = attaque;
        this.precision = precision;
    }



    // Méthode pour attaquer un autre combattant
    attaquer(cible) {
        // Générer un nombre aléatoire entre 0 et 1
        const chance = Math.random();
        console.log(`${this.nom} tente d'attaquer ${cible.nom}...`);

        // Vérifier si l'attaque touche
        if (chance < this.precision) {
            console.log(`${this.nom} a touché ${cible.nom} !`);
            cible.PV -= this.attaque; // Diminuer les points de vie de la cible
            console.log(`${cible.nom} perd ${this.attaque} points de vie. Points de vie restants : ${cible.PV}`);
        } else {
            console.log(`${this.nom} a raté son attaque !`);
        }
    }
}

// Initialiser deux instances de la classe Combattant
const combattant1 = new Combattant("Makoto", 100, 20, 0.6);
const combattant2 = new Combattant("Monokuma", 80, 20, 0.8);

// Boucle de combat
while (combattant1.PV > 0 && combattant2.PV > 0) {
    combattant1.attaquer(combattant2);
    if (combattant2.PV <= 0) {
        console.log(`${combattant2.nom} a été vaincu ! ${combattant1.nom} remporte le combat !`);
        break;
    }

    combattant2.attaquer(combattant1);
    if (combattant1.PV <= 0) {
        console.log(`${combattant1.nom} a été vaincu ! ${combattant2.nom} remporte le combat !`);
        break;
    }
}
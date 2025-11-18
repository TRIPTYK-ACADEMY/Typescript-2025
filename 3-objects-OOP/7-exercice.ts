/**
 * Faire un mini jeu Snake en terminal
 * 
 * - Créer un plateau de jeu sous forme d'une grille 10x10 (class Board)
 * - Chaque case peut être vide, contenir le serpent ou contenir de la nourriture (utiliser un enum)
 * - Le serpent commence au centre (5,5) avec une longueur de 1
 * - La nourriture apparaît aléatoirement sur le plateau
 * - Le joueur peut diriger le serpent avec les commandes "up", "down", "left", "right" (utiliser un enum). Cela se fait via le terminal (stdin)
 * - Le serpent se déplace automatiquement dans la direction choisie
 * - Afficher le plateau après chaque déplacement, en indiquant la position du serpent et de la nourriture
 * - Si le serpent mange la nourriture, il grandit de 1 case et une nouvelle nourriture apparaît
 * - Si le serpent sort du plateau ou se mord la queue, la partie est terminée (Game Over)
 * - Afficher le score (longueur du serpent - 1)
 * 
 * Utiliser des classes et des interfaces pour structurer le code
 */
import readline from "readline";

class Game {
    public tick() {

    }

    public display() {

    }

    public isGameOver() {

    }
}

const game = new Game();
game.display();

// authorise le terminal à émettre des évènements lorsque vous appuyez sur une touche
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Écouter les touches du clavier
process.stdin.on('keypress', (str, key) => {
    // gérer le changement de direction ici
});

// Boucle de jeu
const interval = setInterval(() => {
    game.tick();
    game.display();

    // si le jeu est fini, on quitte le programme
    if (game.isGameOver()) {
        clearInterval(interval);
        process.exit();
    }
    // on rafraîchis toutes les 750ms l'écran
}, 750);


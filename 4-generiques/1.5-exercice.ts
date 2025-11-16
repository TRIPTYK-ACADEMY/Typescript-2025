/**
 * 🎮 EXERCICE: SYSTÈME DE GESTION D'INVENTAIRE DE JEUX VIDÉO 🎮
 * 
 * Tu vas créer un système d'inventaire générique qui peut gérer
 * différents types d'objets de jeu vidéo !
 * 
 * OBJECTIFS:
 * 
 * 1. Utilise les types de base fournis (Rarity, BaseItem, Arme, Armure, Potion)
 * 
 * 2. Crée une classe générique Inventaire<T> qui peut stocker n'importe quel type d'item
 *    Méthodes à implémenter:
 *    - ajouter(item: T): void
 *    - retirer(id: string): T | undefined
 *    - trouverParId(id: string): T | undefined
 *    - filtrerParRarete(rarete: Rarity): T[]
 *    - obtenirTous(): T[]
 *    - obtenirTotal(): number (nombre d'items)
 * 
 * 3. Crée des fonctions génériques utilitaires:
 *    - trierParValeur<T extends BaseItem>(items: T[]): T[]
 *    - trouverLePlusRare<T extends BaseItem>(items: T[]): T | undefined
 *      (Ordre: Légendaire > Épique > Rare > Commun)
 *    - calculerValeurTotale<T extends BaseItem>(items: T[]): number
 * 
 * 4. Crée un système de craft avancé:
 *    - Type générique RecetteCraft<T, U, R> avec les propriétés:
 *      ingredient1: T, ingredient2: U, resultat: R, niveauRequis: number
 *    - Fonction craft<T, U, R>(recette: RecetteCraft<T, U, R>, niveauJoueur: number): R | null
 *      qui retourne le résultat si le niveau est suffisant
 * 
 * 5. Teste ton code:
 *    - Crée des inventaires pour les armes, armures et potions
 *    - Ajoute les items fournis dans les inventaires appropriés
 *    - Teste les fonctions de tri et de recherche
 *    - Crée une recette de craft qui combine 2 potions pour créer une super potion
 *    - Affiche les résultats dans la console
 * 
 */

// ========== Types de base ==========

type Rarity = "Commun" | "Rare" | "Épique" | "Légendaire";

interface BaseItem {
  id: string;
  nom: string;
  rarete: Rarity;
  valeur: number;
}

interface Arme extends BaseItem {
  degats: number;
  type: "Épée" | "Arc" | "Baguette";
}

interface Armure extends BaseItem {
  defense: number;
  slot: "Tête" | "Torse" | "Jambes";
}

interface Potion extends BaseItem {
  effet: string;
  duree: number; // en secondes
}

// ========== TON CODE ICI ==========


// ========== Données de test ==========

const epee: Arme = {
  id: "arme_001",
  nom: "Excaliburne",
  rarete: "Légendaire",
  valeur: 1000,
  degats: 150,
  type: "Épée"
};

const arc: Arme = {
  id: "arme_002",
  nom: "Arc des Elfes",
  rarete: "Épique",
  valeur: 750,
  degats: 120,
  type: "Arc"
};

const casque: Armure = {
  id: "armure_001",
  nom: "Casque du Dragon",
  rarete: "Rare",
  valeur: 500,
  defense: 80,
  slot: "Tête"
};

const potion: Potion = {
  id: "potion_001",
  nom: "Potion de vie",
  rarete: "Commun",
  valeur: 50,
  effet: "Restaure 100 PV",
  duree: 0
};

const potionForce: Potion = {
  id: "potion_002",
  nom: "Potion de force",
  rarete: "Rare",
  valeur: 200,
  effet: "+50% dégâts",
  duree: 300
};
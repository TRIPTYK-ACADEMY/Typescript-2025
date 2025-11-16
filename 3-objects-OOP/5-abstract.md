# Les Classes Abstraites en TypeScript

## Définition

Une classe abstraite est une classe qui ne peut pas être instanciée directement. Elle sert de modèle pour d'autres classes qui en héritent.

## Syntaxe

```typescript
abstract class Animal {
    abstract faireDuBruit(): void;
    
    bouger(): void {
        console.log("L'animal se déplace");
    }
}
```

## Caractéristiques

- Utilise le mot-clé `abstract`
- Peut contenir des méthodes abstraites (sans implémentation)
- Peut contenir des méthodes concrètes (avec implémentation)
- Les classes enfants **doivent** implémenter les méthodes abstraites

## Exemple pratique

```typescript
abstract class Forme {
    abstract calculerAire(): number;
    
    decrire(): void {
        console.log(`Aire: ${this.calculerAire()}`);
    }
}

class Cercle extends Forme {
    constructor(private rayon: number) {
        super();
    }
    
    calculerAire(): number {
        return Math.PI * this.rayon ** 2;
    }
}

class Rectangle extends Forme {
    constructor(private largeur: number, private hauteur: number) {
        super();
    }
    
    calculerAire(): number {
        return this.largeur * this.hauteur;
    }
}

const cercle = new Cercle(5);
cercle.decrire(); // Aire: 78.54...

const rectangle = new Rectangle(4, 6);
rectangle.decrire(); // Aire: 24
```

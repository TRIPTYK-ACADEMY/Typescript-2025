# Bienvenue dans le cours de TypeScript !

Ce cours est conçu pour vous guider à travers les concepts fondamentaux de TypeScript.

## Est-ce populaire ?

[OUI !](https://survey.stackoverflow.co/2025/technology#most-popular-technologies-language)

## Pourquoi ?

- **Typage statique** : TypeScript ajoute un système de types statiques à JavaScript, ce qui permet de détecter les erreurs avant l'exécution.
- **Meilleure lisibilité** : Le typage explicite améliore la lisibilité et la maintenabilité du code.
- **Support des IDE** : TypeScript offre une meilleure intégration avec les éditeurs de code, fournissant des fonctionnalités comme l'autocomplétion et la navigation dans le code.

Mais le plus gros avantage est la détection d'erreurs à la compilation, ce qui réduit les bugs en production ! Un peu comme dans les languages typés classiques comme le Java, C#, Go, ...

```java
public class Main {
    public static void main(String[] args) {
        String a = "Hello"; 
        a = 42; // Erreur de type détectée à la compilation!
        System.out.println(a);
    }
}
```

```javascript
let a = "Hello";
a = 42; // Pas d'erreur, mais peut causer des bugs à l'exécution !
console.log(a);
```

Avec un code de quelques lignes, on s'y retrouve vite. Mais imaginez une variable qui change de type dans un projet de plusieurs milliers de lignes... TypeScript vous aide à éviter ces situations problématiques.

```typescript
let a: string = "Hello";
a = 42; // Erreur de type détectée à la compilation!
console.log(a);
```

De plus en plus de projets adoptent TypeScript pour ses nombreux avantages, et il est devenu un standard dans le développement web moderne.

[State of JS 2024](https://2024.stateofjs.com/en-US/usage/#js_ts_balance)

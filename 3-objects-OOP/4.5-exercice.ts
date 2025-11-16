/** 
 * Chargement des variables d'environnement depuis un fichier .env, validation et typage.
 * Aucune librairie externe n'est utilisée.
 * 
 * Créez une classe ConfigLoader qui :
 * - Charge les variables d'environnement depuis un fichier .env. (attention, vous devez parser le fichier vous-même)
 * - Valide la présence des variables requises : PORT, HOST, NODE_ENV, OPENAI_API_KEY.
 * - Fournit un accès typé aux variables d'environnement via une interface AppEnv.
 * 
 * - Contraintes pour les variables :
 *  - PORT doit être un nombre entre 1 et 65535.
 * - HOST doit être une chaîne de caractères non vide.
 * - NODE_ENV doit être l'une des valeurs : 'development', 'production', 'test'.
 * - OPENAI_API_KEY doit être une chaîne de caractères non vide.
 * 
 * La classe doit avoir une fonction get("VAR_NAME") qui retourne la valeur typée de la variable d'environnement demandée.
 * 
 * Exemple de fichier .env :
 * ```
 * PORT=3000
 * HOST=localhost
 * NODE_ENV=development
 * ```
 * 
 * Assurez-vous que si une variable requise est manquante, une erreur descriptive est levée.
*/
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
 * PORT=3000
 * HOST=localhost
 * NODE_ENV=development
 * 
 * Assurez-vous que si une variable requise est manquante, une erreur descriptive est levée.
*/

let envFileContent = `
PORT=3000
HOST=localhost
NODE_ENV=development
OPENAI_API_KEY=1234
`;

interface MyEnv {
    PORT: number,
    HOST: string,
    NODE_ENV: 'development' | 'production' | 'test',
    OPENAI_API_KEY: string
}

const NODE_ENV_VALUES = ['development', 'production', 'test'];

class ConfigLoader {
    private env: MyEnv | undefined;

    load(content: string) {
        // on sépare ligne par ligne
        const lines = content.split("\n");
        // retirer les lignes qui sont vides
        const filteredLines = lines.filter((l) => l !== '');
        let port: number | undefined;
        let openapi_key: string | undefined;
        let host: string | undefined;
        let node_env: string | undefined;

        for (const line of filteredLines) {
            // on extrait la clé et la valeur
            const [key, value] = line.split("=");
            
            if (key === "PORT") {
                const valueAsNumber = parseInt(value);

                if (valueAsNumber < 0 || valueAsNumber >= 65535) {
                    throw new Error("PORT value is not valid. Accepted is >0 & <65535");
                }

                port = valueAsNumber;
            }

            if (key === "HOST") {
                if (value === "") {
                    throw new Error("La chaine ne doit pas être vide");
                }

                host = value;
            }

            if (key === "NODE_ENV") {
                if (!NODE_ENV_VALUES.includes(value)) {
                    throw new Error(`${value} n'est pas une valeur authorisée pour la clé ${key}`)
                }

                node_env = value;
            }

            if (key === "OPENAI_API_KEY") {
                if (value === "") {
                    throw new Error("La chaine ne doit pas être vide");
                }

                openapi_key = value;
            }
        }

        if (!port) {
            throw new Error("PORT n'est pas présent dans le fichier d'environnement");
        }
        if (!host) {
            throw new Error("HOST n'est pas présent dans le fichier d'environnement");
        }
        if (!node_env) {
            throw new Error("NODE_ENV n'est pas présent dans le fichier d'environnement");
        }
        if (!openapi_key) {
            throw new Error("OPENAI_API_KEY n'est pas présent dans le fichier d'environnement");
        }

        this.env = {
            PORT: port,
            HOST: host,
            NODE_ENV: node_env as 'development' | 'test' | 'production',
            OPENAI_API_KEY: openapi_key,
        }
    }

    // renverra la valeur d'une variable d'environnement
    get(key: keyof MyEnv): unknown {
        if (!this.env) {
            return undefined;
        } 
        return this.env[key];
    }
}

const cl = new ConfigLoader();
cl.load(envFileContent);
console.log(cl.get("PORT")) // => 3000
console.log(cl.get("HOST")) // => localhost
interface JSONPrintable {
    toJSON(): string;
}

interface UserInterface extends JSONPrintable {
    name?: string;
    age: number;
    print(): void;
}

const user: UserInterface = {
    name: "blah",
    age: 14,
    print() {
        
    },
    toJSON() {
        return JSON.stringify({
            name: this.name,
            age: this.age
        })
    }
};

type MaStructure = {
    color(): void;
}

class UserModel implements UserInterface, MaStructure {
    age: number;

    color(): void {
        
    }

    public constructor(
        age: number
    ) {
        this.age = age;
    }
    name?: string | undefined;

    print(): void {
        
    }

    toJSON(): string {
        return JSON.stringify({
            age: this.age
        })
    }
}


// interface A {
//     name: string | number,
//     age: number
// }

// interface B extends A {
//     name: number
// }

type A = {
    name: string;
}

type B = {
    name: number
}

type C = A & B;

const person: UserInterface = {
    age: 0,
    print: function (): void {
        throw new Error("Function not implemented.");
    },
    toJSON: function (): string {
        throw new Error("Function not implemented.");
    }
};

const keys: (keyof UserInterface)[] = ['age','print','toJSON'];
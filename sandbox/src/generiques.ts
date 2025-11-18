
// ma fonction identité aura un type T générique
function identity<T>(arg: T): T {
    return arg;
}

type MyArray<T> = T[]; 
 
const monTableauaaaa: MyArray<string> = ["a"];

identity("a")
identity<string>("a");
identity(5555)
identity<number>(5555);

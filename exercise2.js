const person = {
    _name: "Fabian Rojas", // Propiedad privada 

    get name() {
        return this._name;
    }
};

console.log(person.name); // Output: Fabian Rojas
person.name = "Esteban Rozo"; // ❌ No se puede reasignar porque no hay `setter`
console.log(person.name); // Output: Fabian Rojas
function topFiveCities(citiesList) {
    const count = {}; //Almacena el numero de veces que aparece una ciudad

    // Contar la frecuencia de cada ciudad (sin diferenciar mayúsculas y minúsculas)
    //Recorre todas las ciudades del array citiesList
    citiesList.forEach(city => {
        const lowerCaseCity = city.toLowerCase(); // Normalizar nombres
        count[lowerCaseCity] = (count[lowerCaseCity] || 0) + 1; //Cuenta cuántas veces aparece cada ciudad en el objeto count.
    });

    // Ordenar por número de apariciones y tomar las 5 primeras
    const sortedCities = Object.entries(count) //Convierte count en un array de pares clave-valor
        .sort((a, b) => b[1] - a[1]) // Orden descendente por cantidad (a y b) son elementos del array para comparar los valores numericos
        .slice(0, 5); // Tomar las 5 más frecuentes

    // Mostrar resultados
    sortedCities.forEach(([city, freq]) => console.log(`${city}: ${freq}`));
}

// Prueba con el array dado
const citiesList = [
    "nasville", "nasville", "los angeles", "nasville", "Madrid", "memphis",
    "barcelona", "los angeles", "sevilla", "Madrid", "canary islands",
    "barcelona", "Madrid", "Madrid", "nasville", "barcelona", "london",
    "berlin", "Madrid", "nasville", "london", "Madrid", "Madrid"
];

topFiveCities(citiesList);

// Función para sumar
function sumar(a, b) {
    return a + b;
}

// Función para restar
function restar(a, b) {
    return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir
function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

// Función principal 
function calculadora() {
    let opcion;
    do {
        opcion = prompt("Elige una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");

        if (opcion >= 1 && opcion <= 4) {
            let valor1 = parseFloat(prompt("Ingresa el primer valor:"));
            let valor2 = parseFloat(prompt("Ingresa el segundo valor:"));
            let resultado;

            switch(opcion) {
                case "1":
                    resultado = sumar(valor1, valor2);
                    break;
                case "2":
                    resultado = restar(valor1, valor2);
                    break;
                case "3":
                    resultado = multiplicar(valor1, valor2);
                    break;
                case "4":
                    resultado = dividir(valor1, valor2);
                    break;
                default:
                    resultado = "Opción no válida";
                    break;
            }
            alert("El resultado es: " + resultado);
        } else if (opcion === "5") {
            alert("Hasta la próxima baby");
        } else {
            alert("Opción no válida, por favor elige una opción del 1 al 5");
        }
    } while (opcion !== "5");
}

// Llamamos a la función principal
calculadora();

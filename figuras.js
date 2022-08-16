// Cálculo del cuadado.
const ladoCuadrado = document.querySelector('#ladoCuadrado');
const botonCuadrado = document.querySelector('#botonCuadrado');
const resultadoCuadrado = document.querySelector('#resultadoCuadrado');
botonCuadrado.addEventListener('click', calcularCuadrado);

function calcularCuadrado () {
    let lado = parseFloat(ladoCuadrado.value);
    let diametro = lado * 4;
    let area = lado ** 2;

    console.group('Cuadrado');
    console.log(`Diámetro: ${diametro}`);
    console.log(`Área: ${area}`);
    console.groupEnd();
}

//Cálculo del círculo.
const radioCirculo = document.querySelector('#radioCirculo');
const botonCirculo = document.querySelector('#botonCirculo');
const resultadoCirculo = document.querySelector('resultadoCirculo');
botonCirculo.addEventListener('click', calcularCirculo);

function calcularCirculo () {
    let radio = parseFloat(radioCirculo.value);
    let circunferencia = (Math.PI * radio).toFixed(3);
    let area = (Math.PI * (radio**2)).toFixed(3);

    console.group('Círculo');
    console.log(`Circunferencia: ${circunferencia}`);
    console.log(`Área: ${area}`);
    console.groupEnd();
}

//Cálculo del triángulo.
const baseTriangulo = document.querySelector('#base');
const ladoTrianguloA = document.querySelector('#lado1');
const ladoTrianguloB = document.querySelector('#lado2');
const botonTriangulo = document.querySelector('#botonTriangulo');
const resultadoTriangulo = document.querySelector('#resultadoTriangulo');
botonTriangulo.addEventListener('click', calcularTriangulo);

let base;
let cat_a;
let cat_b;
let altura;
let tipoDeTriangulo;

function calcularTriangulo () {
    calcularAlturaTriangulo();
    console.group(`Triángulo ${tipoDeTriangulo}.`);
    console.log(`Altura: ${altura}`);
    console.log(`Área: ${(base * altura) / 2}`);
    console.groupEnd();
}

function calcularAlturaTriangulo () {
    let lado_a = parseFloat(baseTriangulo.value);
    let lado_b = parseFloat(ladoTrianguloA.value);
    let lado_c = parseFloat(ladoTrianguloB.value);

    if (lado_a == lado_b && lado_a == lado_c) {
        tipoDeTriangulo = 'Equilátero';
        base = lado_a;
        altura = (lado_a * Math.sqrt(3) / 2);
    } else if ((lado_a != lado_b && lado_b == lado_c ) || (lado_b != lado_a && lado_a == lado_c) || (lado_a == lado_b && lado_c != lado_a)) {
        tipoDeTriangulo = 'Isósceles';
        if (lado_a != lado_b && lado_b == lado_c ) {
            base = lado_a;
            cat_a = lado_b;
            cat_b = lado_c;
        } else if (lado_b != lado_a && lado_a == lado_c) {
            base = lado_b;
            cat_a = lado_a;
            cat_b = lado_c;
        } else {
            base = lado_c;
            cat_a = lado_a;
            cat_b = lado_b;
        }

        if ((base / 2) >= cat_a) {
            console.warn('Esa figura no es un triángulo');
        } else {
            altura = Math.sqrt((cat_a**2) - ((base**2) / 4));
        }
    } else {
        tipoDeTriangulo = 'Escaleno';
        base = lado_a;
        cat_a = lado_b;
        cat_b = lado_c;

        let S = (lado_a + lado_b + lado_c) / 2;
        let altura_a = (2 / lado_a) * Math.sqrt(S * (S - lado_a) * (S - lado_b) * (S - lado_c));
        let altura_b = (2 / lado_b) * Math.sqrt(S * (S - lado_a) * (S - lado_b) * (S - lado_c));
        let altura_c = (2 / lado_c) * Math.sqrt(S * (S - lado_a) * (S - lado_b) * (S - lado_c));

        altura = altura_a;
    }
}
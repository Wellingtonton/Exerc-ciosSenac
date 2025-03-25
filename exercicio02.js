function multiplicarMatrizes(A, B) { // Recebe as matrizes A e B, realiza os cálculos e armazena o resultado em uma nova matriz chamada resultado.
    // Cria uma matriz 2x2 para armazenar o resultado da multiplicação
    let resultado = [
        // Calcula os elementos da matriz resultante
        [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]], // Representa o elemento da primeira linha, primeira coluna da matriz A
        [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]
    ];
    return resultado; // Retorna a matriz resultado, que contém o resultado da multiplicação das duas matrizes
}

// Definição das matrizes 2x2
let A = [[1, 2], [3, 4]]; // Matriz A
let B = [[5, 6], [7, 8]]; // Matriz B

// Multiplicação das matrizes chamando a função
let resultado = multiplicarMatrizes(A, B);

// Resultado no console
console.log("Matriz A:"); // Mostra a matriz A
A.forEach(linha => console.log(linha.join(" ")));

console.log("Matriz B:", B); // Mostra a matriz B
B.forEach(linha => console.log(linha.join(" ")));

console.log("Resultado da multiplicação:", resultado); // Exibe o resultado da multiplicação
resultado.forEach(linha => console.log(linha.join(" ")));

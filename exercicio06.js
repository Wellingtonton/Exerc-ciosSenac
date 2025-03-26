function rotacionarMatriz(matriz) { // Define a função rotacionarMatriz que recebe uma matriz como parametro
    let N = matriz.length; // Aqui ele obetém o tamanho da matriz
    let matrizRotacionada = Array.from({ length: N }, () => Array(N).fill(0)); // Aqui ele cria uma nova matriz com o mesmo tamanho da matriz original
    
    for (let i = 0; i < N; i++) { // Dois lopp for aninhados para percarrer cada elemento da matriz

        
        for (let j = 0; j < N; j++) { // Aqui ele percorre as colunas da matriz 
            matrizRotacionada[j][N - 1 - i] = matriz[i][j]; // Aqui ele rotaciona a matriz em 90 graus
        }
    }
    
    return matrizRotacionada; // Retorna a matriz rotacionaria
}

// Aqui ele define uma matriz 3x3
let matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let resultado = rotacionarMatriz(matriz3x3); // Chama a função para rotacionar a matriz
console.log("Matriz original:"); // Exibe a matriz original
console.table(matriz3x3); 
console.log("Matriz rotacionada 90 graus:");
console.table(resultado); // Aqui o console.table exibe o resultado da matriz rotacionada

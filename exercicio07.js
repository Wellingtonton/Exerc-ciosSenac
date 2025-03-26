function somaBordas(matriz) { // Define a função somaBordas que recebe uma matriz como parâmetro
    let N = matriz.length; // Aqui ele obtem o tamanho da matriz
    let soma = 0; // Inicializa a variável soma com 0
    
    for (let i = 0; i < N; i++) { // Dois loop for aninhados para percorrer cada elemento da matriz
        for (let j = 0; j < N; j++) { // Aqui ele percorre as colunas da matriz
            // E verifica se o elemento esta na borda da matriz
            if (i === 0 || i === N - 1 || j === 0 || j === N - 1) { // Se o elemento estiver na borda
                // A soma recebe o valor do elemento

                soma += matriz[i][j]; // Soma dos elementos da borda
            }
        }
    }
    
    return soma; // Retorna a soma dos elementos da borda
}

// Define uma matriz 3x3
let matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let resultado = somaBordas(matriz3x3); // Chama a função para somar os elementos da borda
// Exibe a matriz e o resultado da soma
console.log("Matriz:"); // Exibe a matriz
console.table(matriz3x3);
console.log("Soma das bordas:", resultado); // Resultado da borda dos elementos da matriz

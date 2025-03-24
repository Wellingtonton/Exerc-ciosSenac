function transporMatriz(matriz) {
    // Aqui ele cria uma nova matriz 3x3 para armazenar a matriz transposta
    let matrizTransposta = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    // Aqui ele percorre a matriz original e preenche a matriz transposta
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrizTransposta[j][i] = matriz[i][j];
        }
    }

    return matrizTransposta; //Retorna a matriz transportada
}

// Defina a matriz original 3x3
let matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrizTransposta = transporMatriz(matrizOriginal); // Aqui ele chama a função para transpor a matriz original
 // e armazena o resultado.
console.log("Matriz Original:"); // Imprime a matriz original no console
console.log(matrizOriginal);
console.log("Matriz Transposta:"); // Imprime a matriz transposta no console
console.log(matrizTransposta);
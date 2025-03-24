function criarMatriz3x3() {  // Aqui a função cria uma tabela com 3 linhas e 3 colunas
    let matriz = []; // Cria uma linha vazia chamada matriz, que vai armazenar as linhas da matriz.
    for (let i = 0; i < 3; i++) { // Em seguida usa 2 loops. O primeiro (com i) percorre as linhas, e o segundo
     // (com j) percorre as colunas. 
        let linha = []; // Cria uma nova lista vazia chamada linha, para armazenar os valores da linha atual.
        for (let j = 0; j < 3; j++) { // Outro loop que vai de 0 a 2 
            let valor = parseInt(prompt(`Digite o valor para a posição [${i}][${j}] da matriz:`)); // Para cada  
            // posição da matriz, ela pede ao usuário para digitar um valor, usando o prompt.   
            linha.push(valor); // Adiciona o valor digitado a lista.
        }
        matriz.push(linha);
    }
    return matriz; // Retorna a matriz completa após 3 linhas serem preenchidas.
}

function somarMatrizes(matriz1, matriz2) { // Soma duas matrizes 3x3
    let resultado = []; // Cria uma lista vazia chamada resultado que vai armazenar a matriz resultante da soma
    for (let i = 0; i < 3; i++) { // Um loop que vai de 0 a 2, que vai percorrer as linhas.
        let linha = []; // Cria uma nova lista vazia para a linha atual do resultado.
        for (let j = 0; j < 3; j++) { // Outro loop que vai de 0 a 2, para percorrer as colunas.
            linha.push(matriz1[i][j] + matriz2[i][j]); // Aqui ele soma os elementos correspondentes das duas 
        } // matrizes e adiciona o resultado à linha.
        resultado.push(linha); // Aqui ele adiciona a linha resultante da matriz de resultado.
    }
    return resultado; // Retorna a matriz resultante da soma.
}

function imprimirMatriz(matriz, nome) {
    console.log(`${nome}:`); // Imprime a matriz do console.
    matriz.forEach(linha => console.log(linha.join(" "))); // Imprime os valores a cada linha da matriz.
    console.log(); // Imprime uma linha em branco.
}

// Criando as matrizes
let matriz1 = criarMatriz3x3(); // Chama a funcão para criar a primeira matriz
let matriz2 = criarMatriz3x3(); // Chama a função novamente para criar a 2º matriz

// Somando as matrizes
let resultado = somarMatrizes(matriz1, matriz2); // Chama a função para somar as duas matrizes.

// Exibindo as matrizes
imprimirMatriz(matriz1, "Matriz 1"); // Imprime a 1º matriz
imprimirMatriz(matriz2, "Matriz 2"); // Imprime a 2º matriz
imprimirMatriz(resultado, "Matriz Soma"); // Imprime a matriz resultante da soma

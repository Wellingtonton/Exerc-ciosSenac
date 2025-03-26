function gerarMatrizIdentidade(n) { // Define a função geradaMatrizIdentidade que recebe um parâmetro
    // Cria uma matriz NxN com todos os elementos inicializados como 0
    const matriz = Array(n).fill(null).map(() => Array(n).fill(0));
  
    // Define os elementos da diagonal principal como 1
    for (let i = 0; i < n; i++) {
      matriz[i][i] = 1; // Atribui 1 aos elementos da diagonal principal
    }
  
    return matriz; // Retorna a matriz indentidade gerada
  }
  
  
  const tamanho = 5; // Define o tamanho da matriz identidade
  const matrizIdentidade = gerarMatrizIdentidade(tamanho);
  
  // Imprime a matriz identidade no console
  console.log(matrizIdentidade);
function buscarNumeroNaMatriz(matriz, numero) { // Aqui a função recebe como entrada uma matriz
    for (let linha = 0; linha < matriz.length; linha++) { // Utiliza dois loop for aninhados para percorrer
     // cada elemento da matriz. loop externo 'linha'intera pelas linhas da matriz  
      for (let coluna = 0; coluna < matriz[linha].length; coluna++) { // loop interno 'coluna', intera pelas 
     // colunas de cada linha    
        if (matriz[linha][coluna] === numero) { // Aqui ele verifica se o elemento atual é igual o número procurado
          return { linha: linha, coluna: coluna }; // Retorna um objeto com a posição (linha e coluna)'Se encontrar'
        }
      }
    }
    return null; // Retorna null 'Se o loop terminar e não encontrar o número'
  }
  
 // Aqui ele define uma matriz de exemplo
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] 
  ];
  
  const numeroProcurado = 5; // Aqui se define o número que deseja procurar
  const posicao = buscarNumeroNaMatriz(matriz, numeroProcurado); // Chama a função para buscar o número da matriz
  
  if (posicao) { // Verifica se a posição foi encontrada // console.log imprime a posição do número 'Se encontrado'
    console.log(`O número ${numeroProcurado} foi encontrado na linha ${posicao.linha}, coluna ${posicao.coluna}.`);
  } else {
    console.log(`O número ${numeroProcurado} não foi encontrado na matriz.`);
  } // Se não encontrou, imprime uma mensagem informando que o número não está na matriz

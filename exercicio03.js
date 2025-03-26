const readline = require('readline'); // Aqui ele importa o módulo para interagir com o usuário no console

// Cria uma interface para ler entradas do console
const rl = readline.createInterface({
    input: process.stdin, // Aqui define como entrada padrão para capturar o que o usuário digita no console
    output: process.stdout // Aqui ele define a saída padrão 
});

// Inicializa a matriz do jogo da velha
// Aqui ele cria uma matriz 3x3 para representar o tabuleiro do jogo da velha
let tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// Função para imprimir o tabuleiro
function imprimirTabuleiro() {
    console.log('  0 1 2'); // Imprime as colunas
    for (let i = 0; i < 3; i++) { // loop for para percorrer as linhas
        let linha = i + ' '; // Imprime as linhas
        for (let j = 0; j < 3; j++) { // loop for para percorrer as colunas
            // Aqui ele percorre a matriz do tabuleiro e imprime os elementos
            linha += tabuleiro[i][j] + ' ';
        }
        console.log(linha); // Imprime a linha
    }
}

// Função para verificar se há um vencedor
function verificarVencedor() {
    // Verifica linhas, colunas e diagonais
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== ' ' && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
            return tabuleiro[i][0]; // Vencedor encontrado
        }
        if (tabuleiro[0][i] !== ' ' && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
            return tabuleiro[0][i]; // Vencedor encontrado
        }
    }
    if (tabuleiro[0][0] !== ' ' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
        return tabuleiro[0][0]; // Vencedor encontrado
    }
    if (tabuleiro[0][2] !== ' ' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
        return tabuleiro[0][2]; // Vencedor encontrado
    }
    return null; // Nenhum vencedor
}

// Função para verificar se o tabuleiro está cheio 
function verificarEmpate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === ' ') {
                return false; // Ainda há espaços vazios no tabuleiro
            }
        }
    }
    return true; // Tabuleiro cheio 
}

// Função principal do jogo
function jogar(turno) {
    imprimirTabuleiro(); 
    const jogador = turno % 2 === 0 ? 'X' : 'O'; // Alterna entre 'X' e 'O'
    rl.question(`Jogador ${jogador}, insira sua jogada (linha e coluna, separados por espaço): `, (resposta) => {
        const [linha, coluna] = resposta.split(' ').map(Number);
        
        // Verifica se a jogada é válida
        if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2 || tabuleiro[linha][coluna] !== ' ') {
            console.log('Jogada inválida! Tente novamente.');
            jogar(turno); // Repete a jogada
        } else {
            tabuleiro[linha][coluna] = jogador; // Faz a jogada
            
            const vencedor = verificarVencedor();
            if (vencedor) {
                imprimirTabuleiro();
                console.log(`Jogador ${vencedor} venceu!`); // Exibe o vencedor
                rl.close();
            } else if (verificarEmpate()) {
                imprimirTabuleiro();
                console.log('Empate! O jogo terminou.'); // Exibe o empate
                rl.close();
            } else {
                jogar(turno + 1); // Passa para o próximo turno
            }
        }
    });
}

// Inicia o jogo
jogar(0);


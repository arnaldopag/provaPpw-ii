const dados = require("./dados.json");

const gerarJogador = function () {
    const jogador = {
        nome: dados.nome[parseInt(Math.random() * dados.nome.length)],
        sobreNome:
            dados.sobrenome[parseInt(Math.random() * dados.sobrenome.length)],
        numeroCamisa: parseInt(Math.random() * 11),
        posicao: dados.posicao[parseInt(Math.random() * dados.posicao.length)],
        clube: dados.clube[parseInt(Math.random() * dados.clube.length)],
    };
    jogador.mesagem = `O ${jogador.nome} ${jogador.sobreNome}  eh ${jogador.posicao} de ${jogador.idade} anos jogador do ${jogador.clube}`;
    return jogador;
};

module.exports = gerarJogador;

const express = require("express");
const router = express.Router();
const gerarJogador = require("./gerador");

router.get("/gerador/random", (req, res) => {
    let jogador = gerarJogador();
    res.json(jogador);
});
router.get("/gerador", (req, res) => {
    let limite = req.query.limite;
    let jogadorLista = [];
    if (limite == undefined) {
        let jogador = gerarJogador();
        for (let i = 0; i <= 5; i++) {
            jogadorLista.push(jogador);
        }
    } else {
        for (let i = 0; i < limite; i++) {
            let jogador = gerarJogador();
            jogadorLista.push(jogador);
        }
    }
    res.json(jogadorLista);
});
router.post("/gerador/:propriedade", (req, res) => {
    parametro = req.params.propriedade;
    valor = req.query.valor;
    console.log(parametro);
    console.log(valor);
    res.send("pronto");
    ///so consegui ate aqui
});

module.exports = router;

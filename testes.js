// Funções de Cálculo de Açaí (Corrigidas)
function calcularSubtotalAcai(qtdPacoca, qtdLeiteCond) {
    let precoBase = 18.00;
    let precoPacoca = 2.00;
    let precoLeiteCond = 3.00; // Ajustado conforme regra oficial

    // Regra: Quantidades negativas não abatem o valor da tigela base
    let pacocasValidadas = qtdPacoca < 0 ? 0 : qtdPacoca;
    let leiteCondValidado = qtdLeiteCond < 0 ? 0 : qtdLeiteCond;

    return precoBase + (pacocasValidadas * precoPacoca) + (leiteCondValidado * precoLeiteCond);
}

function calcularFaturaFinal(subtotal, frete, cupom) {
    let total = subtotal + frete;
    if (cupom === "RETRO10") {
        total = total - 10.00;
    }
    return total;
}

// Bateria de Testes (testes.js)
function executarBateriaTestes() {
    // CT-01: Tigela base padrão sem adicionais (0 paçocas, 0 leite condensado)
    {
        const qtdPacoca = 0;
        const qtdLeiteCond = 0;
        const resultadoEsperado = 18.00;
        const resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        assert("CT-01: Tigela base padrão sem adicionais", resultadoObtido, resultadoEsperado);
    }

    // CT-02: Tigela com 2 paçocas (R$ 22,00 esperado)
    {
        const qtdPacoca = 2;
        const qtdLeiteCond = 0;
        const resultadoEsperado = 22.00;
        const resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        assert("CT-02: Tigela com 2 paçocas", resultadoObtido, resultadoEsperado);
    }

    // CT-03: Tigela com 2 coberturas de leite condensado (R$ 24,00 esperado)
    {
        const qtdPacoca = 0;
        const qtdLeiteCond = 2;
        const resultadoEsperado = 24.00;
        const resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        assert("CT-03: Tigela com 2 coberturas de leite condensado", resultadoObtido, resultadoEsperado);
    }

    // CT-04: Entrada com quantidade negativa de acompanhamentos (-2 paçocas)
    {
        const qtdPacoca = -2;
        const qtdLeiteCond = 0;
        const resultadoEsperado = 18.00;
        const resultadoObtido = calcularSubtotalAcai(qtdPacoca, qtdLeiteCond);
        assert("CT-04: Entrada com quantidade negativa de acompanhamentos", resultadoObtido, resultadoEsperado);
    }

    // CT-05: Fatura final com subtotal R$ 20,00 + frete R$ 5,00 + cupom RETRO10 (R$ 15,00 esperado)
    {
        const subtotal = 20.00;
        const frete = 5.00;
        const cupom = "RETRO10";
        const resultadoEsperado = 15.00;
        const resultadoObtido = calcularFaturaFinal(subtotal, frete, cupom);
        assert("CT-05: Fatura final com subtotal, frete e cupom RETRO10", resultadoObtido, resultadoEsperado);
    }
}

// Execução automática da bateria de testes
executarBateriaTestes();

Prompt 1:
Atue como um Engenheiro de QA Sênior especialista em testes de software web. 
Analise os seguintes critérios de aceitação de uma aplicação de pedidos:
1. Tigela base de açaí: R$ 18,00 fixa.
2. Acompanhamentos extras: Paçoca = R$ 2,00 a porção; Leite Condensado = R$ 3,00 a porção.
3. Frete fixo para o Centro: R$ 5,00.
4. Cupom promocional 'RETRO10': concede R$ 10,00 de desconto no valor final.
5. A aplicação não pode aceitar quantidades negativas.

Gere uma tabela de Casos de Teste contendo:
- ID do Teste
- Cenário / Descrição
- Entradas (Dados de teste)
- Resultado Esperado
Inclua obrigatoriamente testes de caminho feliz, valores limite (fronteira) e valores inválidos/negativos.

Prompt 2:
Atue como um Engenheiro de QA especialista em testes unitários automatizados em JavaScript.

Analise as seguintes funções de cálculo de uma loja de açaí:

function calcularSubtotalAcai(qtdPacoca, qtdLeiteCond) {
    let precoBase = 18.00;
    let precoPacoca = 2.00;
    let precoLeiteCond = 0.30; 
    return precoBase + (qtdPacoca * precoPacoca) + (qtdLeiteCond * precoLeiteCond);
}

function calcularFaturaFinal(subtotal, frete, cupom) {
    let total = subtotal + frete;
    if (cupom === "RETRO10") {
        total = total - 10.00;
    }
    return total;
}

Regras de negócio oficiais:
- Tigela base: R$ 18,00 fixa.
- Paçoca: R$ 2,00 por porção.
- Leite Condensado: R$ 3,00 por cobertura (Atenção: o código atual pode conter erro aqui).
- Frete Centro: R$ 5,00 somado matematicamente.
- Cupom 'RETRO10': abate R$ 10,00 do valor final.
- Quantidades negativas de acompanhamentos não podem abater o valor da tigela base.

Escreva o código do arquivo 'testes.js' em JavaScript puro contendo uma função 'executarBateriaTestes()' que utiliza o padrão AAA (Arrange, Act, Assert) e chama a função global assert(nomeDoTeste, resultadoObtido, resultadoEsperado).

Crie 5 casos de teste essenciais:
1. CT-01: Tigela base padrão sem adicionais (0 paçocas, 0 leite condensado).
2. CT-02: Tigela com 2 paçocas (R$ 22,00 esperado).
3. CT-03: Tigela com 2 coberturas de leite condensado (R$ 24,00 esperado pela regra oficial).
4. CT-04: Entrada com quantidade negativa de acompanhamentos (-2 paçocas).
5. CT-05: Fatura final com subtotal R$ 20,00 + frete R$ 5,00 + cupom RETRO10 (R$ 15,00 esperado).

Finalize chamando executarBateriaTestes() automaticamente. Não recrie a função assert, use a que já existe na aplicação.


Prompt 3: 
Atue como desenvolvedor sênior. A função JavaScript a seguir apresentou duas falhas identificadas em testes:
1. Trata a taxa de frete como string em algumas integrações, causando concatenação indesejada ('20' + '5' = '205').
2. Permite quantidades negativas de acompanhamentos, reduzindo o valor base da tigela.

[Colar aqui as funções calcularSubtotalAcai e calcularFaturaFinal]

Refatore as funções implementando:
- Conversão explícita para número (parseFloat / Number)
- Tratamento defensivo para entradas menores que zero
- Correção do preço do leite condensado para R$ 3,00

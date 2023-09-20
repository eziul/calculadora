function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtracao(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)'))
    if (!operacao || operacao >= 7) {
        alert("Erro - Operação invalida!");
        calculadora();
    } else {
        let primeiroValor = Number(prompt("Insira o primeiro valor"));
        let segundoValor = Number(prompt("Insira o segundo valor"));
        let resultado;

        if (!primeiroValor || !segundoValor) {
            alert("Erro - Operação inválida");
            calculadora();
        } else {
            function soma() {
                resultado = primeiroValor + segundoValor;
                alert(`${primeiroValor} + ${segundoValor} = ${resultado}`);
            }
            function subtracao() {
                resultado = primeiroValor - segundoValor;
                alert(`${primeiroValor} - ${segundoValor} = ${resultado}`);
            }
            function multiplicacao() {
                resultado = primeiroValor * segundoValor;
                alert(`${primeiroValor} * ${segundoValor} = ${resultado}`);
            }
            function divisaoReal() {
                resultado = primeiroValor / segundoValor;
                alert(`${primeiroValor} / ${segundoValor} = ${resultado}`);
            }
            function divisaoInteira() {
                resultado = primeiroValor % segundoValor;
                alert(`${primeiroValor} % ${segundoValor} = ${resultado}`);
            }
            function potenciacao() {
                resultado = primeiroValor ** segundoValor;
                alert(`${primeiroValor} ** ${segundoValor} = ${resultado}`);
            }
            
            if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisaoReal();
            } else if (operacao == 5) {
                divisaoInteira();
            } else if (operacao == 6) {
                potenciacao();
            }
        }
    }
}

calculadora()
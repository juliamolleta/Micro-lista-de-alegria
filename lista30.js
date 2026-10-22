// 01 maior de idade
let idade1 = 17;
if(idade >=18){
    console.log("Você é maior de idade!")
 }else{
     console.log("Você é menor de idade!")
 }

// 02 numero positivo, negativo ou zero
let numero1 = -8;

if (numero > 0) {
  console.log(`O número ${numero} é positivo!`);
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo!`);
} else {
  console.log(`O número ${numero} é zero!`);
}

if (numeroDois > 0) {
  console.log(`O número ${numeroDois} é positivo!`);
} else if (numeroDois < 0) {
  console.log(`O número ${numeroDois} é negativo!`);
} else {
  console.log(`O número ${numeroDois} é zero!`);
}

if (numeroTres > 0) {
  console.log(`O número ${numeroTres} é positivo!`);
} else if (numeroTres < 0) {
  console.log(`O número ${numeroTres} é negativo!`);
} else {
  console.log(`O número ${numeroTres} é zero!`);
}

// 03 par ou ímpar
let numero2 = 23;

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 04 maior entre dois números
let a = 35;
let b = 42;

   if (num1 > num2) {
        console.log(`Entre ${num1} e ${num2}, o maior número é: ${num1}`);
    } else if (num2 > num1) 
        console.log(`Entre ${num1} e ${num2}, o maior número é: ${num2}`);
        
// 05 entrada em evento
let idade2 = 20;

let ingressoValido = true;
if (idade >= 18 && ingressoValido) {
    console.log("Entrada autorizada");
} else {
    console.log("Entrada negada");
}

// 06. desconto vip 
let valorCompra3 = 150;
let clienteVIP4 = true;
let desconto5 = 0;

if (valorCompra >= 200 || clienteVIP) {
    desconto = valorCompra * 0.20;
}

let valorFinal = valorCompra - desconto;

console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);

// 07 faixa de temperatura
let temperatura = 85;
if (temperatura < 40) {

    console.log("Baixa");
} else if (temperatura <= 80) {
    console.log("Normal");
} else {
    console.log("Superaquecimento");
}

// 08 aprovação escolar
let nota6 = 8;
let frequencia7 = 80;

if (nota >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// 09 classificação por idade
let idade9 = 17;

if (idade < 0) {
    console.log("Idade inválida");
} else if (idade <= 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// 10 acesso ao laboratório
let horario = 19;
let autorizado = true;

if (autorizado && horario >= 8 && horario <= 18) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// 11 empréstimo bancário
let renda = 4500;
let possuiRestricao = false;

if (renda >= 3000 && !possuiRestricao) {
    console.log("Empréstimo aprovado");
} else {
    console.log("Empréstimo negado");
}

// 12 frete grátis
let totalCompra = 180;
let cupomFrete = true;
let frete = 25;

if (totalCompra >= 250 || cupomFrete) {
    frete = 0;
}

let totalPagar = totalCompra + frete;

console.log(`Total a pagar: R$ ${totalPagar.toFixed(2)}`);

// 13 nível do jogador
let pontos = 750;

if (pontos < 100) {
    console.log("Iniciante");
} else if (pontos < 500) {
    console.log("Bronze");
} else if (pontos < 1000) {
    console.log("Prata");
} else {
    console.log("Ouro");
}

// 14. senha e usuário
let usuario10= "julia";
let senha11 = "maravilhosa";

if (usuario === "julia" && senha === "maravilhosa") {
    console.log("Acesso liberado");
} else {
    console.log("Acesso negado");
}

// 15 semaforo
let cor = "amarelo";

if (cor === "verde") {
    console.log("Siga");
} else if (cor === "amarelo") {
    console.log("Atenção");
} else if (cor === "vermelho") {
    console.log("Pare");
} else {
    console.log("Cor inválida");
}

// 16 dia útil ou fim de semana
let dia = 6;

if (dia < 1 || dia > 7) {
    console.log("Dia inválido");
} else if (dia <= 5) {
    console.log("Dia útil");
} else {
    console.log("Fim de semana");
}

// 17 pode dirigir?
let idade12 = 22;
let possuiCNH = false;

if (idade < 18) {
    console.log("Não pode dirigir: menor de idade");
} else if (!possuiCNH) {
    console.log("Não pode dirigir: não possui CNH");
} else {
    console.log("Pode dirigir");
}

// 18 estoque de produto
let estoque13 = 4;
let quantidadePedida = 6;

if (quantidadePedida <= 0) {
    console.log("Pedido inválido");
} else if (quantidadePedida <= estoque) {
    estoque = estoque - quantidadePedida;
    console.log("Venda autorizada");
    console.log(`Estoque restante: ${estoque}`);
} else {
    console.log("Estoque insuficiente");
}

// 19 boletim com recuperação
let nota = 5.8;
let frequencia14 = 82;

if (frequencia < 75) {
    console.log("Reprovado por frequência");
} else if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado por nota");
}

// 20 desconto por faixa
let valorCompra = 380;
let percentual = 0;

if (valorCompra < 100) {
    percentual = 0;
} else if (valorCompra < 300) {
    percentual = 0.05;
} else if (valorCompra < 500) {
    percentual = 0.10;
} else {
    percentual = 0.15;
}

let desconto = valorCompra * percentual;
let total = valorCompra - desconto;

console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);

// 21 triângulo válido 
let ladoAa = 3;
let ladoBb = 4;
let ladoCc = 5;

if (
    ladoA > 0 &&
    ladoB > 0 &&
    ladoC > 0 &&
    ladoA + ladoB > ladoC &&
    ladoA + ladoC > ladoB &&
    ladoB + ladoC > ladoA
) {
    console.log("Triângulo válido");
} else {
    console.log("Triângulo inválido");
}

// 22. tipo de triângulo
let ladoA = 6;
let ladoB = 6;
let ladoC = 4;

if (
    ladoA <= 0 ||
    ladoB <= 0 ||
    ladoC <= 0 ||
    ladoA + ladoB <= ladoC ||
    ladoA + ladoC <= ladoB ||
    ladoB + ladoC <= ladoA
) {
    console.log("Triângulo inválido");
} else if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Equilátero");
} else if (
    ladoA === ladoB ||
    ladoA === ladoC ||
    ladoB === ladoC
) {
    console.log("Isósceles");
} else {
    console.log("Escaleno");
}

// 23 cálculo de IMC

let peso = 72;
let altura = 1.75;

if (peso <= 0 || altura <= 0) {
    console.log("Peso ou altura inválidos");
} else {
    let imc = peso / (altura ** 2);

    console.log(`IMC: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc < 25) {
        console.log("Faixa considerada normal");
    } else if (imc < 30) {
        console.log("Sobrepeso");
    } else {
        console.log("Obesidade");
    }
}

// 24 tarifa de estacionamento

let horas = 5;
let clienteConveniado = true;
let valor = 0;

if (horas <= 0) {
    console.log("Quantidade de horas inválida");
} else {
    if (horas <= 2) {
        valor = 10;
    } else {
        valor = 10 + (horas - 2) * 4;
    }

    if (clienteConveniado) {
        valor = valor * 0.80;
    }

    console.log(`Valor final: R$ ${valor.toFixed(2)}`);
}

// 25 velocidade na via

let velocidade = 92;
let limite = 80;

if (velocidade <= limite) {
    console.log("Dentro do limite");
} else if (velocidade <= limite * 1.20) {
    console.log("Acima do limite");
} else {
    console.log("Muito acima do limite");
}

// 26 bolsa de estudos

let media = 9.1;
let frequencia17 = 92;
let rendaFamiliar = 2400;

if (media >= 9 && frequencia >= 90 && rendaFamiliar <= 2500) {
    console.log("Bolsa integral");
} else if (
    media >= 7 &&
    frequencia >= 75 &&
    rendaFamiliar <= 4000
) {
    console.log("Bolsa parcial");
} else {
    console.log("Sem bolsa");
}

// 27 sistema de login com bloqueio

let usuario = "admin";
let senha = "1234";
let tentativas = 2;

if (tentativas >= 3) {
    console.log("Conta bloqueada");
} else if (usuario === "admin" && senha === "1234") {
    console.log("Login autorizado");
} else {
    console.log("Credenciais inválidas");
}

// 28 consumo de energia 

let consumoKWh = 250;
let tarifa = 0;

if (consumoKWh < 0) {
    console.log("Consumo inválido");
} else {
    if (consumoKWh <= 100) {
        tarifa = 0.60;
    } else if (consumoKWh <= 200) {
        tarifa = 0.75;
    } else {
        tarifa = 0.90;
    }

    let conta = consumoKWh * tarifa;

    console.log(`Valor da conta: R$ ${conta.toFixed(2)}`);
}

// 29 processamento de pedido

let estoque = 12;
let quantidade = 3;
let precoUnitario = 80;
let saldoCliente = 220;
let clienteVIP = false;

if (quantidade <= 0) {
    console.log("Compra rejeitada: quantidade inválida");
} else if (quantidade > estoque) {
    console.log("Compra rejeitada: estoque insuficiente");
} else {
    let subtotal = quantidade * precoUnitario;
    let valorFinal = subtotal;

    if (clienteVIP) {
        valorFinal = subtotal * 0.90;
    }

    if (saldoCliente >= valorFinal) {
        estoque = estoque - quantidade;
        saldoCliente = saldoCliente - valorFinal;

        console.log("Compra autorizada");
        console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
        console.log(`Estoque restante: ${estoque}`);
        console.log(`Saldo restante: R$ ${saldoCliente.toFixed(2)}`);
    } else {
        console.log("Compra rejeitada: saldo insuficiente");
    }
}

// 30 desafio final- inscrição em competição

let idade = 17;
let notaProva = 82;
let frequencia = 88;
let autorizacaoResponsavel = true;
let possuiPendencia = false;

if (idade < 14 || idade > 20) {
    console.log("Inscrição recusada: idade fora da faixa");
} else if (notaProva < 70) {
    console.log("Inscrição recusada: nota insuficiente");
} else if (frequencia < 80) {
    console.log("Inscrição recusada: frequência insuficiente");
} else if (possuiPendencia) {
    console.log("Inscrição recusada: possui pendência");
} else if (idade < 18 && !autorizacaoResponsavel) {
    console.log("Inscrição recusada: falta autorização do responsável");
} else {
    console.log("Inscrição aprovada");
}
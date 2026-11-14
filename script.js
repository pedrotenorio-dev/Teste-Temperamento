/* ========== Julia: JS - INICIALIZAÇÃO, VALIDAÇÃO DO FORMULÁRIO E PERGUNTAS ========== */

"use strict";

window.addEventListener("load", iniciarAplicacao);

let nome = "";
let indice = 0;
let respostas = [];

function iniciarAplicacao() {
  document.querySelector("#btn-iniciar").addEventListener("click", clicarIniciar);
  document.querySelector("#nome").addEventListener("input", validarNome);
  document.querySelector("#faixa").addEventListener("change", validarFaixa);
  document.querySelector("#aceite").addEventListener("change", validarAceite);

  document.querySelector("#btn-avancar").addEventListener("click", avancar);
  document.querySelector("#btn-voltar").addEventListener("click", voltar);

  document.querySelector("#btn-refazer").addEventListener("click", refazerTeste);
}

function mostrarTela(idTela) {
  document.querySelector("#tela-inicio").style.display = "none";
  document.querySelector("#tela-teste").style.display = "none";
  document.querySelector("#tela-resultado").style.display = "none";

  document.querySelector("#" + idTela).style.display = "block";
}


function validarNome() {
  let campo = document.querySelector("#nome");
  let erro = document.querySelector("#erro-nome");

  if (campo.value.trim().length < 2) {
    erro.innerHTML = "Digite um nome com pelo menos 2 letras.";
    campo.style.border = "2px solid #b42318";
    return false;
  } else {
    erro.innerHTML = "";
    campo.style.border = "";
    return true;
  }
}

function validarFaixa() {
  let campo = document.querySelector("#faixa");
  let erro = document.querySelector("#erro-faixa");

  if (campo.value == "") {
    erro.innerHTML = "Selecione sua faixa etária.";
    campo.style.border = "2px solid #b42318";
    return false;
  } else {
    erro.innerHTML = "";
    campo.style.border = "";
    return true;
  }
}

function validarAceite() {
  let campo = document.querySelector("#aceite");
  let erro = document.querySelector("#erro-aceite");

  if (campo.checked == false) {
    erro.innerHTML = "Marque a caixa para continuar.";
    return false;
  } else {
    erro.innerHTML = "";
    return true;
  }
}

function clicarIniciar() {
  let nomeOk = validarNome();
  let faixaOk = validarFaixa();
  let aceiteOk = validarAceite();

  if (nomeOk && faixaOk && aceiteOk) {
    nome = document.querySelector("#nome").value;
    indice = 0;
    respostas = [];
    mostrarTela("tela-teste");
    mostrarPergunta();
  }
}


const PERGUNTAS = [
  {
    texto: "Em um trabalho em grupo, você costuma...",
    opcoes: [
      { texto: "Assumir a liderança e definir o rumo do grupo", tipo: "colerico" },
      { texto: "Animar a turma e puxar conversa com todos", tipo: "sanguineo" },
      { texto: "Cuidar dos detalhes e prever possíveis problemas", tipo: "melancolico" },
      { texto: "Manter a calma e ajudar a conciliar opiniões", tipo: "fleumatico" }
    ]
  },
  {
    texto: "Qual seria seu fim de semana ideal?",
    opcoes: [
      { texto: "Ler, ver um filme ou me dedicar a um hobby em silêncio", tipo: "melancolico" },
      { texto: "Cumprir um desafio: esporte, projeto ou meta pessoal", tipo: "colerico" },
      { texto: "Descansar em casa, sem horários nem compromissos", tipo: "fleumatico" },
      { texto: "Reunir amigos e curtir uma festa ou passeio", tipo: "sanguineo" }
    ]
  },
  {
    texto: "Diante de um problema inesperado, você...",
    opcoes: [
      { texto: "Respira fundo e segue com paciência, um passo de cada vez", tipo: "fleumatico" },
      { texto: "Analisa com cuidado antes de tomar qualquer atitude", tipo: "melancolico" },
      { texto: "Procura o lado bom e pede ajuda a quem está por perto", tipo: "sanguineo" },
      { texto: "Age rápido para resolver na hora", tipo: "colerico" }
    ]
  },
  {
    texto: "Qual destas frases as pessoas mais diriam sobre você?",
    opcoes: [
      { texto: "“É animado(a) e divertido(a)”", tipo: "sanguineo" },
      { texto: "“É tranquilo(a) e confiável”", tipo: "fleumatico" },
      { texto: "“É determinado(a) e direto(a)”", tipo: "colerico" },
      { texto: "“É sério(a) e perfeccionista”", tipo: "melancolico" }
    ]
  },
  {
    texto: "Em uma discussão, sua reação mais comum é...",
    opcoes: [
      { texto: "Ficar em silêncio e repensar tudo depois", tipo: "melancolico" },
      { texto: "Evitar o conflito e ceder para manter a paz", tipo: "fleumatico" },
      { texto: "Defender meu ponto de vista com firmeza", tipo: "colerico" },
      { texto: "Tentar aliviar o clima com humor", tipo: "sanguineo" }
    ]
  },
  {
    texto: "Ao planejar uma viagem, você prefere...",
    opcoes: [
      { texto: "Um roteiro eficiente, com objetivos claros", tipo: "colerico" },
      { texto: "Uma planilha detalhada, com plano B para tudo", tipo: "melancolico" },
      { texto: "Improvisar e conhecer gente pelo caminho", tipo: "sanguineo" },
      { texto: "Ir levando, sem estresse e sem pressa", tipo: "fleumatico" }
    ]
  },
  {
    texto: "Ao fazer uma tarefa longa, você...",
    opcoes: [
      { texto: "Segue em ritmo constante, sem se apressar", tipo: "fleumatico" },
      { texto: "Começa empolgado(a), mas se distrai com facilidade", tipo: "sanguineo" },
      { texto: "Faz com capricho e revisa várias vezes", tipo: "melancolico" },
      { texto: "Quer terminar o quanto antes", tipo: "colerico" }
    ]
  },
  {
    texto: "Ao conhecer pessoas novas, você...",
    opcoes: [
      { texto: "Puxa conversa e faz amizade rapidamente", tipo: "sanguineo" },
      { texto: "Vai direto ao assunto", tipo: "colerico" },
      { texto: "Escuta mais do que fala e é bem receptivo(a)", tipo: "fleumatico" },
      { texto: "Observa primeiro e se abre aos poucos", tipo: "melancolico" }
    ]
  },
  {
    texto: "O que mais te incomoda?",
    opcoes: [
      { texto: "Bagunça e trabalho mal feito", tipo: "melancolico" },
      { texto: "Rotina monótona e ficar sozinho(a)", tipo: "sanguineo" },
      { texto: "Lentidão e falta de resultados", tipo: "colerico" },
      { texto: "Pressão e mudanças bruscas", tipo: "fleumatico" }
    ]
  },
  {
    texto: "Ao tomar uma decisão importante, você...",
    opcoes: [
      { texto: "Prefere pedir opiniões e não ter pressa", tipo: "fleumatico" },
      { texto: "Decide rápido, de olho no objetivo", tipo: "colerico" },
      { texto: "Segue a empolgação e a intuição", tipo: "sanguineo" },
      { texto: "Pesa prós e contras por bastante tempo", tipo: "melancolico" }
    ]
  }
];

function mostrarPergunta() {
  let pergunta = PERGUNTAS[indice];

  document.querySelector("#texto-progresso").innerHTML = `Pergunta ${indice + 1} de ${PERGUNTAS.length}`;
  document.querySelector("#enunciado").innerHTML = pergunta.texto;

  let html = "";
  for (let opcao of pergunta.opcoes) {
    let marcado = "";
    if (respostas[indice] == opcao.tipo) {
      marcado = "checked";
    }

    html += `<label class="alternativa">
               <input type="radio" name="alternativa" value="${opcao.tipo}" ${marcado} />
               ${opcao.texto}
             </label>`;
  }
  document.querySelector("#alternativas").innerHTML = html;

  document.querySelector("#mensagem-erro").style.display = "none";

  if (indice == 0) {
    document.querySelector("#btn-voltar").style.visibility = "hidden";
  } else {
    document.querySelector("#btn-voltar").style.visibility = "visible";
  }

  if (indice == PERGUNTAS.length - 1) {
    document.querySelector("#btn-avancar").innerHTML = "Ver resultado";
  } else {
    document.querySelector("#btn-avancar").innerHTML = "Próxima →";
  }
}

/* ========== Victor: JS - NAVEGAÇÃO, CÁLCULO DOS PONTOS E RESULTADO ========== */

function avancar() {
  let escolhida = "";
  let opcoes = document.querySelectorAll("#alternativas input");

  for (let opcao of opcoes) {
    if (opcao.checked) {
      escolhida = opcao.value;
    }
  }

  if (escolhida == "") {
    document.querySelector("#mensagem-erro").style.display = "block";
    return;
  }

  respostas[indice] = escolhida;

  if (indice == PERGUNTAS.length - 1) {
    mostrarResultado();
  } else {
    indice++;
    mostrarPergunta();
  }
}

function voltar() {
  indice--;
  mostrarPergunta();
}

function calcularPontos() {
  let colerico = 0;
  let sanguineo = 0;
  let melancolico = 0;
  let fleumatico = 0;

  for (let tipo of respostas) {
    switch (tipo) {
      case "colerico":
        colerico++;
        break;
      case "sanguineo":
        sanguineo++;
        break;
      case "melancolico":
        melancolico++;
        break;
      case "fleumatico":
        fleumatico++;
        break;
    }
  }

  return [
    { tipo: "colerico", pontos: colerico },
    { tipo: "sanguineo", pontos: sanguineo },
    { tipo: "melancolico", pontos: melancolico },
    { tipo: "fleumatico", pontos: fleumatico }
  ];
}

function mostrarResultado() {
  let resultado = calcularPontos();

  let maior = 0;

  for (let item of resultado) {
    if (item.pontos > maior) {
      maior = item.pontos;
    }
  }

  let vencedores = 0;

  for (let item of resultado) {
    if (item.pontos == maior) {
      document.querySelector("#resultado-" + item.tipo).style.display = "block";
      document.querySelector("#pontos-" + item.tipo).innerHTML = `${item.pontos} de ${PERGUNTAS.length} respostas`;
      vencedores++;
    } else {
      document.querySelector("#resultado-" + item.tipo).style.display = "none";
    }
  }

  if (vencedores > 1) {
    document.querySelector("#titulo-resultado").innerHTML = `${nome}, você tem ${vencedores} temperamentos em destaque`;
  } else {
    document.querySelector("#titulo-resultado").innerHTML = `${nome}, seu temperamento predominante é:`;
  }

  mostrarTela("tela-resultado");
}

function refazerTeste() {
  mostrarTela("tela-inicio");
}

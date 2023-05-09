//Seleção de elementos:

const runFunc1 = document.querySelector(".run-1");
const origemFunc1 = document.querySelector("#origem-select");
const destinoFunc1 = document.querySelector("#destino-select");
const modalidadeFunc1 = document.querySelector("#modalidade-select");
const resultBlockFunc1 = document.querySelector("#resultado");

let origem = 0;
let origemStr = '';
let destino = '';
let modalidade = 0;
let modalidadeStr = '';
let distancia = 0;
let valor = 0;
let textoFinal = '';


//Funções

function selectOrigem() {
  origem = Number(origemFunc1.value);
  console.log(origem);
  return origem;
}

function selectDestino() {
  destino = destinoFunc1.value;
  console.log(destino);
  return destino;
}

function selectModalidade() {
  modalidade = Number(modalidadeFunc1.value);
  console.log(modalidade);
  return modalidade;
}

function resulDistancia() {
  distancia = Number(objectCSV[origem][destino]);
  console.log(distancia);
  return distancia;
}

function resulPreco() {
  valor = Number(distancia * modalidade).toFixed(2);
  console.log(valor);
  return valor;
}


function texto() {

  switch (origem) {
    case 0:
      origemStr = "ARACAJU";
      break;
    case 1:
      origemStr = "BELEM";
      break;
    case 2:
      origemStr = "BELO HORIZONTE";
      break;
    case 3:
      origemStr = "BRASILIA";
      break;
    case 4:
      origemStr = "CAMPO GRANDE";
      break;
    case 5:
      origemStr = "CUIABA";
      break;
    case 6:
      origemStr = "CURITIBA";
      break;
    case 7:
      origemStr = "FLORIANOPOLIS";
      break;
    case 8:
      origemStr = "FORTALEZA";
      break;
    case 9:
      origemStr = "GOIANIA";
      break;
    case 10:
      origemStr = "JOAO PESSOA";
      break;
    case 11:
      origemStr = "MACEIO";
      break;
    case 12:
      origemStr = "MANAUS";
      break;
    case 13:
      origemStr = "NATAL";
      break;
    case 14:
      origemStr = "PORTO ALEGRE";
      break;
    case 15:
      origemStr = "PORTO VELHO";
      break;
    case 16:
      origemStr = "RECIFE";
      break;
    case 17:
      origemStr = "RIO BRANCO";
      break;
    case 18:
      origemStr = "RIO DE JANEIRO";
      break;
    case 19:
      origemStr = "SALVADOR";
      break;
    case 20:
      origemStr = "SAO LUIS";
      break;
    case 21:
      origemStr = "SAO PAULO";
      break;
    case 22:
      origemStr = "TERESINA";
      break;
    case 23:
      origemStr = "VITORIA";
      break;
    default:
      console.log("Erro na cidade de origem");
      break;
  }

  switch (modalidade) {
    case 4.87:
      modalidadeStr = "caminhão de pequeno porte"
      break;
    case 11.92:
      modalidadeStr = "caminhão de médio porte"
      break;
    case 27.44:
      modalidadeStr = "caminhão de grande porte"
      break;
    default:
      console.log("Erro na modalidade");
      break;
  }
}

function calcular() {
  selectOrigem();
  selectDestino();
  selectModalidade();
  resulDistancia();
  resulPreco();
  texto();
}

const inputEl = () => {
  calcular();
  textoFinal = '';

  if (origemStr === destino) {
    textoFinal = "Não é possível calcular a rota entre uma mesma cidade. Selecione cidades diferentes para Origem e Destino!";
  } else {
    textoFinal = `De ${origemStr} para ${destino}, utilizando um ${modalidadeStr}, a distância é de ${distancia}Km e o custo será de R$ ${valor}`;
  }

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("div-result");

  const resultParag = document.createElement("p");
  resultParag.innerText = textoFinal;
  resultDiv.appendChild(resultParag);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remover");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  resultDiv.appendChild(deleteBtn);


  resultBlockFunc1.appendChild(resultDiv);
}

//Eventos

runFunc1.addEventListener("click", (e) => {
  inputEl();
});


document.addEventListener("click", (e) => {

  const targetEl = e.target;
  const parentEl = targetEl.closest("div");

  if (targetEl.classList.contains("remover")) {
    parentEl.classList.add("hide");
  }
});

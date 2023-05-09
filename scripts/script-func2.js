
//FUNCIONALIDADE  2

//Seletores

const origemFunc2 = document.querySelector("#origem-select-2");
const clickParadas = document.querySelector(".adc-paradas");
const adcParadas = document.querySelector("#paradas");
const clickItems = document.querySelector(".itemBtn");
const adcItems = document.querySelector("#item-form");
const runFunc2 = document.querySelector(".run-2");
const resultBlockFunc2 = document.querySelector("#resultado-2");
const clickDownload = document.querySelector(".download");
const itemName = document.querySelector("#name");
const itemQuantity = document.querySelector("#quantity");
const itemWeight = document.querySelector("#weight");



// let totalParadas = [document.querySelectorAll(".destino-select-2,option,value")];
// console.log(totalParadas);




const selectParadasHTML = '<option value="ARACAJU">Aracaju - SE</option><option value="BELEM">Belém - PA</option><option value="BELO HORIZONTE">Belo Horizonte - MG</option><option value="BRASILIA">Brasilia - DF</option><option value="CAMPO GRANDE">Campo Grande - MS</option><option value="CUIABA">Cuiabá - MT</option><option value="CURITIBA">Curitiba - PR</option><option value="FLORIANOPOLIS">Florianópolis - SC</option><option value="FORTALEZA">Fortaleza - CE</option><option value="GOIANIA">Goiania - GO</option><option value="JOAO PESSOA">João Pessoa - PB</option><option value="MACEIO">Maceió - AL</option><option value="MANAUS">Manaus - AM</option><option value="NATAL">Natal - RN</option><option value="PORTO ALEGRE">Porto Alegre - RS</option><option value="PORTO VELHO">Porto Velho - RO</option><option value="RECIFE">Recife - PE</option><option value="RIO BRANCO">Rio Branco - AC</option><option value="RIO DE JANEIRO">Rio de Janeiro - RJ</option><option value="SALVADOR">Salvador - BH</option><option value="SAO LUIS">São Luis - MA</option><option value="SAO PAULO">São Paulo - SP</option><option value="TERESINA">Teresina - PI</option><option value="VITORIA">Vitória - ES</option>';

const inputItemsHTML = '<input type="text" class="item-input" id="name" placeholder="Nome do item"><input type="text" class="item-input" id="quantity" placeholder="Quantidade"><input type="text" class="item-input" id="weight" placeholder="Peso (Kg)">'


//Funções

const inputParadas = () => {                                    /*Adiciona um campo select paradas*/

  const paradaSelect = document.createElement("select");
  paradaSelect.classList.add("destiny");
  paradaSelect.innerHTML = selectParadasHTML;

  adcParadas.appendChild(paradaSelect);
}


const inputItems = () => {                                      /*Adiciona um campo input items*/

  const itemsDiv = document.createElement("div");
  itemsDiv.classList.add("item-div");
  itemsDiv.innerHTML = inputItemsHTML;

  adcItems.appendChild(itemsDiv);
}


function displayResultado2() {                                   /*Adiciona o campo resultado*/

  const resultDiv = document.createElement("div");
  resultDiv.classList.add("div-result");

  const resultParag = document.createElement("p");
  resultParag.innerText = text;
  resultDiv.appendChild(resultParag);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remover");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  resultDiv.appendChild(deleteBtn);


  resultBlockFunc2.appendChild(resultDiv);

}

/*CALCULO DO RESULTADO*/
let origem2 = 0
let origemStr2 = "";

function selectOrigem2() {                                       /*Recebe o valor de Origem*/
  origem2 = Number(origemFunc2.value);
  console.log(origem2);
  return origem2;
}

function textoOrigem2() {

  switch (origem2) {
    case 0:
      origemStr2 = "ARACAJU";
      break;
    case 1:
      origemStr2 = "BELEM";
      break;
    case 2:
      origemStr2 = "BELO HORIZONTE";
      break;
    case 3:
      origemStr2 = "BRASILIA";
      break;
    case 4:
      origemStr2 = "CAMPO GRANDE";
      break;
    case 5:
      origemStr2 = "CUIABA";
      break;
    case 6:
      origemStr2 = "CURITIBA";
      break;
    case 7:
      origemStr2 = "FLORIANOPOLIS";
      break;
    case 8:
      origemStr2 = "FORTALEZA";
      break;
    case 9:
      origemStr2 = "GOIANIA";
      break;
    case 10:
      origemStr2 = "JOAO PESSOA";
      break;
    case 11:
      origemStr2 = "MACEIO";
      break;
    case 12:
      origemStr2 = "MANAUS";
      break;
    case 13:
      origemStr2 = "NATAL";
      break;
    case 14:
      origemStr2 = "PORTO ALEGRE";
      break;
    case 15:
      origemStr2 = "PORTO VELHO";
      break;
    case 16:
      origemStr2 = "RECIFE";
      break;
    case 17:
      origemStr2 = "RIO BRANCO";
      break;
    case 18:
      origemStr2 = "RIO DE JANEIRO";
      break;
    case 19:
      origemStr2 = "SALVADOR";
      break;
    case 20:
      origemStr2 = "SAO LUIS";
      break;
    case 21:
      origemStr2 = "SAO PAULO";
      break;
    case 22:
      origemStr2 = "TERESINA";
      break;
    case 23:
      origemStr2 = "VITORIA";
      break;
    default:
      console.log("Erro na cidade de origem");
      break;
  }
}


/*Recebe os valores de Destino*/


let destinoNumber = 0;
let destinyLoop = "";
let distPosiZero = 0;
let totalLoop = 0;
let total = 0
let distancia2 = 0;
let destinyZero = "";
let destino2Array = [];
let repeat = 0;
let itemsStr = "";
let itensQtd = [];
let totalQtd = 0;
let arrayQtd = [];
let valorPeso = [];
let totalPeso = 0;
let arrayPeso = [];
let cargas = [];
let text = '';


function selectDestino2() {                                                 /*Tentativa de selecionar o destino (n-1) para pegar o módulo da distância entre 'antigo e novo destino' => funcionou até o 3 destino*/
  destino2Array = document.querySelectorAll(".destiny");
  distancia2 = 0;
  total = 0;


  repeat = (destino2Array.length);
  destinyZero = destino2Array[0].value;


  if (repeat === 1) {
    console.log("1 parada");
    distancia2 = Number(objectCSV[origem2][destinyZero]);
    console.log(distancia2);
    return distancia2;
  }


  if (repeat > 1) {

    switch (destinyZero) {
      case "ARACAJU":
        destinoNumber = 0;
        break;
      case "BELEM":
        destinoNumber = 1;
        break;
      case "BELO HORIZONTE":
        destinoNumber = 2;
        break;
      case "BRASILIA":
        destinoNumber = 3;
        break;
      case "CAMPO GRANDE":
        destinoNumber = 4;
        break;
      case "CUIABA":
        destinoNumber = 5;
        break;
      case "CURITIBA":
        destinoNumber = 6;
        break;
      case "FLORIANOPOLIS":
        destinoNumber = 7;
        break;
      case "FORTALEZA":
        destinoNumber = 8;
        break;
      case "GOIANIA":
        destinoNumber = 9;
        break;
      case "JOAO PESSOA":
        destinoNumber = 10;
        break;
      case "MACEIO":
        destinoNumber = 11;
        break;
      case "MANAUS":
        destinoNumber = 12;
        break;
      case "NATAL":
        destinoNumber = 13;
        break;
      case "PORTO ALEGRE":
        destinoNumber = 14;
        break;
      case "PORTO VELHO":
        destinoNumber = 15;
        break;
      case "RECIFE":
        destinoNumber = 16;
        break;
      case "RIO BRANCO":
        destinoNumber = 17;
        break;
      case "RIO DE JANEIRO":
        destinoNumber = 18;
        break;
      case "SALVADOR":
        destinoNumber = 19;
        break;
      case "SAO LUIS":
        destinoNumber = 20;
        break;
      case "SAO PAULO":
        destinoNumber = 21;
        break;
      case "TERESINA":
        destinoNumber = 22;
        break;
      case "VITORIA":
        destinoNumber = 23;
      default:
        console.log("Erro no switch case Origem 2");
        break;
    }

    console.log("Mais de uma parada");

    distPosiZero = Number(objectCSV[origem2][destinyZero]);
    console.log("Essa é a distância entre origem e o primeiro destino: " + distPosiZero);

    for (let i = 0; i < repeat; i++) {
      destinyLoop = destino2Array[i].value;

      console.log(destinyLoop);

      distancia2 = Number(objectCSV[destinoNumber][destinyLoop]);
      console.log(distancia2);

      totalLoop = total + distancia2;
    }

    total = totalLoop + distPosiZero;
    console.log(total);
    return total;
  }
}

let itemNomeValid = ""
function itemNameFunc() {                                              /*Recebe os nomes dos itens*/
  const itemNameArray = document.querySelectorAll("#name");
  itemsStr = "";

  itemNameArray.forEach(item => {
    itemsStr += item.value + ", ";
    itemNomeValid = item.value
  });

  console.log(itemsStr);
}


function itemQtdFunc() {                                            /*Mapeia a quantidade de itens e somatório geral*/
  const queryReturn = document.querySelectorAll('#quantity');
  arrayQtd = [];
  totalQtd = 0;
  itensQtd = [];


  for (let i = 0; i < queryReturn.length; i++) {
    const quantidadeItem = queryReturn[i].value;
    itensQtd.push(quantidadeItem);
  }

  arrayQtd = itensQtd.map(Number);

  for (let i = 0; i < arrayQtd.length; i++) {
    totalQtd += arrayQtd[i];
  }

  console.log(arrayQtd);
  console.log("Total: " + totalQtd);
};


function itemWeightFunc() {                                         /*Mapeia e faz somatório dos pesos*/
  const queryReturn = document.querySelectorAll('#weight');
  arrayPeso = [];
  totalPeso = 0;
  valorPeso = [];


  for (let i = 0; i < queryReturn.length; i++) {
    const valorCarga = queryReturn[i].value;
    valorPeso.push(valorCarga);
  }

  arrayPeso = valorPeso.map(Number);

  for (let i = 0; i < arrayPeso.length; i++) {
    totalPeso += arrayPeso[i];
  }
  console.log(arrayPeso);
  console.log("Total: " + totalPeso);
};



function textoFinalFunc2() {
  textoOrigem2();

  if (repeat >= 3) {
    text = "Selecione no máximo 2 paradas!";
  } else if (!itemNomeValid) {
    text = "Digite um nome de item válido";
  } else if (!totalQtd || !totalPeso) {
    text = "Digite números válidos para Quantidade e Peso";
  } else if (origemStr2 === destinyZero || origemStr2 === destinyLoop || destinyZero === destinyLoop) {
    text = "Não é possível calcular a rota entre uma mesma cidade. Selecione cidades diferentes para Origem, Parada e Destino!";
  } else if (repeat === 1) {
    text = `De ${origemStr2} para ${destinyZero} a distância a ser percorrida é de ${distancia2} km, para transporte dos produtos ${itemsStr} - Quantidade total: ${totalQtd} Peso total: ${totalPeso}Kg. Será necessário utilizar {x} {veículo}, de forma a resultar no menor custo de transporte por km rodado. O valor total do transporte dos itens é R$ {custoTotal} sendo R$ {custoUnitario} o custo unitário médio.`;
  } else if (repeat < 3) {
    text = `De ${origemStr2} para ${destinyLoop} com parada em ${destinyZero} a distância a ser percorrida é de ${total} km, para transporte dos produtos ${itemsStr} - Quantidade total: ${totalQtd} Peso total: ${totalPeso}Kg. Será necessário utilizar {x} {veículo}, de forma a resultar no menor custo de transporte por km rodado. O valor total do transporte dos itens é R$ {custoTotal} sendo R$ {custoUnitario} o custo unitário médio e {custoTrecho} o valor referente a cada trecho.`;
  }
}

//Eventos

clickParadas.addEventListener("click", (e) => {
  inputParadas();
});


runFunc2.addEventListener("click", (e) => {
  selectOrigem2();
  selectDestino2();
  itemNameFunc();
  itemQtdFunc();
  itemWeightFunc();
  textoFinalFunc2();
  displayResultado2();
});


clickItems.addEventListener("click", (e) => {
  inputItems();
});


clickDownload.addEventListener("click", (e) => {
  alert("Em construção...");
});




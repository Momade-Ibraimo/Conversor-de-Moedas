// const button = document.getElementById("convert-button");
// const select = document.getElementById("currency-select");

// const dolar = 5.38;
// const eur = 6.5;

// const convertValues = () => {
//   const inputReais = document.getElementById("input-real").value;
//   // console.log(inputReais / dolar);
//  const realTexto = document.getElementById("real-texto");
//   const currencyValue = document.getElementById("currency-value");

//   const dolar = 5.38;
//   const euro = 6.71;

//   realTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   }).format(inputReais);

//   if (select.value == "US$ Dólar Americano") {
//     currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(inputReais / dolar);
//   }

//   if (select.value === "€ Euro") {
//     currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
//       style: "currency",
//       currency: "EUR",
//     }).format(inputReais / euro);
//   }
// };

// const changeConverterPara = () => {
//   const currencyName = document.getElementById("currency-name");
//   const currencyImg = document.getElementById("Image-div2");

//   if (select.value === "US$ Dólar Americano") {
//     currencyName.innerHTML = "US$ Dólar Americano";
//     currencyImg.src = "./assets/images/images usa calc.jpg";
//     currencyImg.style.padding = "-101px";
//   }

//   if (select.value === "€ Euro") {
//     currencyName.innerHTML = "€ Euro";
//     currencyImg.src = "./assets/images/pnG-EURO2 - Copia.png";
//     currencyImg.style.padding = "-101px";
//   }
//   convertValues()
// };

// button.addEventListener("click", convertValues);
// select.addEventListener("change", changeConverterPara);




// const button = document.getElementById('convert-button')
// const select = document.getElementById('currency-select')


// const dolar = 5.50
// const euro = 6.50

// const convertButton = () => {
//   const inputReais = document.getElementById('input-real').value
//   const realTexto = document.getElementById('real-texto')
//   const currencyValue = document.getElementById('currency-value')

//   realTexto.innerHTML = new Intl.NumberFormat("pt-BR", {
//   style: "currency",
//   currency: "BRL",
// }).format(inputReais);

// if (select.value === 'US$ Dólar Americano') {
//   currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// }).format(inputReais / dolar);
// }

// if (select.value === '€ Euro') {
//   currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
//   style: "currency",
//   currency: "EUR",
// }).format(inputReais / euro);
// }


// }

// const changeCurrency = () => {
//   const currencyName = document.getElementById('currency-name')
// const imageDiv2 = document.getElementById('Image-div2')

// if (select.value === 'US$ Dólar Americano') {
// currencyName.innerHTML = 'US$ Dólar Americano'
// imageDiv2.src = "./assets/images/images usa calc.jpg"

// }

// if (select.value === '€ Euro') {
// currencyName.innerHTML = '€ Euro'
// imageDiv2.src = "./assets/images/pnG-EURO2 - Copia.png";

// }

// convertButton()

// }

// button.addEventListener('click', convertButton)
// select.addEventListener('change', changeCurrency)





// const button = document.getElementById('convert-button')
// const select = document.getElementById('currency-select')

// const euro = 6.50
// const dolar = 5.50

// const convertButton = () => {
//   const inputReais = document.getElementById('input-real').value
//   const realTexto = document.getElementById('real-texto')
//   const currencyValue = document.getElementById('currency-value')


// realTexto.innerHTML = currencyValue.innerHTML  = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// }).format(inputReais); 

// if (select.value === 'US$ Dólar Americano') {
// currencyValue.innerHTML  = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
// }).format(inputReais / dolar); 
// }


// if (select.value === '€ Euro') {
// currencyValue.innerHTML  = new Intl.NumberFormat('de-DE', {
//   style: 'currency',
//   currency: 'EUR',
// }).format(inputReais / euro);

// }

// }

// const changeCurrency = () => {
//   const imageDiv2 = document.getElementById('Image-div2')
// const currencyName = document.getElementById('currency-name')
// // const euroTexto = document.getElementById('euro-texto"')

// if (select.value === 'US$ Dólar Americano') {

//   currencyName.innerHTML = 'US$ Dólar Americano'
// imageDiv2.src = "./assets/images/images usa calc.jpg"
// }

// if (select.value === '€ Euro') {

//   currencyName.innerHTML = '€ Euro'
// imageDiv2.src = "./assets/images/pnG-EURO2 - Copia.png";
// }
// convertButton()

// }

// button.addEventListener('click', convertButton)
// select.addEventListener('change', changeCurrency)





const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.50
const euro = 6.50
const bitcoin = 544849.70
const libra = 7.02

const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realTexto = document.getElementById('real-texto')
  const currencyValue = document.getElementById('currency-value')

  realTexto.innerHTML =  new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(inputReais);

if (select.value === 'US$ Dólar Americano') {
  currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(inputReais / dolar );
}


if (select.value === '€ Euro' ) {
 currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
}).format(inputReais / euro );
}

if (select.value === 'Bitcoin' ) {
 currencyValue.innerHTML = 'BTC ' + (inputReais / bitcoin ).toFixed(8) 
}

if (select.value === 'Libra' ) {
 currencyValue.innerHTML = new Intl.NumberFormat('en-GP', {
  style: 'currency',
  currency: 'GBP'
}).format(inputReais / libra );
}


}

const changeCurrency = () => {
const currencyName = document.getElementById('currency-name')
const imageDiv2 = document.getElementById('Image-div2')

if (select.value === 'US$ Dólar Americano' ) {
currencyName.innerHTML = 'US$ Dólar Americano'
imageDiv2.src = "./assets/images/dolar.png"
}

if (select.value === '€ Euro' ) {
currencyName.innerHTML = '€ Euro'
imageDiv2.src = "./assets/images/euro.png"
}

if (select.value === 'Bitcoin' ) {
currencyName.innerHTML = 'Bitcoin'
imageDiv2.src = "./assets/images/bitcoin.png"
}

if (select.value === 'Libra' ) {
currencyName.innerHTML = 'Libra'
imageDiv2.src = "./assets/images/libra.png"
}

convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)























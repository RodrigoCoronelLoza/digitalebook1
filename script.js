let candidate = Number(localStorage["boo1Unefco"]);
let currentPage = 0;
if (candidate > -1 && candidate < Object.keys(textData).length - 1) {
  currentPage = candidate;
}
let currentSlideNumberCarousel = 0;
let currentParagNumber = 1;

// Esta funcion hace la renderizacion de cada una de las paginas
function renderPage() {
  const pageContent = document.getElementById("page-content");
  const titleContainer = document.getElementById("book-title-container");
  const menuHeader = document.getElementById("menu-header");
  const advButton = document.getElementById("adv-buttons");

  const overlay = document.getElementById("overlay");
  const indexPermanent = document.getElementById("index-permanent");

  pageContent.addEventListener("click", handleDomCLick);
  overlay.addEventListener("click", handleOverlayClick);

  if (currentPage === 0) {
    menuHeader.style.visibility = "hidden";
    titleContainer.style.display = "none";
    advButton.style.display = "none";
  } else {
    menuHeader.style.visibility = "visible";
    titleContainer.style.display = "block";
    advButton.style.display = "block";
  }

  if (currentPage === 0 || currentPage === 2) {
    indexPermanent.style.display = "none";
  } else {
    indexPermanent.style.display = "block";
  }

  pageContent.className = layoutData[currentPage];
  pageContent.innerHTML = createStructure(
    titlesData,
    textData,
    layoutData,
    currentPage,
    popUpData,
    imagesData,
    buttonsNameData,
    buttonsPageNumberData,
    linksData
  );
  colorButton();
}
//Poner color al indice de la barra lateral
function colorButton() {
  const allButtons = document.getElementById("index-permanent");
  const indexButton1 = document.getElementById("index-button1");
  const indexButton2 = document.getElementById("index-button2");
  const indexButton3 = document.getElementById("index-button3");
  const indexButton4 = document.getElementById("index-button4");
  const indexButton5 = document.getElementById("index-button5");
  const indexButton6 = document.getElementById("index-button6");
  const indexButton7 = document.getElementById("index-button7");
  const indexButton8 = document.getElementById("index-button8");
  const indexButton9 = document.getElementById("index-button9");
  const indexButton10 = document.getElementById("index-button10");
  const indexButton11 = document.getElementById("index-button11");
  const indexButton12 = document.getElementById("index-button12");
  const indexButton13 = document.getElementById("index-button13");
  const indexButton14 = document.getElementById("index-button14");
  const indexButton15 = document.getElementById("index-button15");
  const indexButton16 = document.getElementById("index-button16");
  const indexButton17 = document.getElementById("index-button17");
  const indexButton18 = document.getElementById("index-button18");
  const indexButton19 = document.getElementById("index-button19");

  if (currentPage >= 0 && currentPage <= 4) {
    indexButton1.style.fontWeight = "bold";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 5 && currentPage <= 6) {
    indexButton2.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage === 7) {
    indexButton3.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 8 && currentPage <= 9) {
    indexButton4.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage === 10) {
    indexButton5.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage === 11) {
    indexButton6.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 12 && currentPage <= 16) {
    indexButton7.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 17 && currentPage <= 18) {
    indexButton8.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 19 && currentPage <= 22) {
    indexButton9.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage === 23) {
    indexButton10.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 24 && currentPage <= 25) {
    indexButton11.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 26 && currentPage <= 32) {
    indexButton12.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 33 && currentPage <= 34) {
    indexButton13.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 35 && currentPage <= 37) {
    indexButton14.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 38 && currentPage <= 40) {
    indexButton15.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 41 && currentPage <= 43) {
    indexButton16.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage >= 44 && currentPage <= 48) {
    indexButton17.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage === 49) {
    indexButton18.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton19.style.fontWeight = "normal";
  } else if (currentPage === 50) {
    indexButton19.style.fontWeight = "bold";
    indexButton1.style.fontWeight = "normal";
    indexButton2.style.fontWeight = "normal";
    indexButton3.style.fontWeight = "normal";
    indexButton4.style.fontWeight = "normal";
    indexButton5.style.fontWeight = "normal";
    indexButton6.style.fontWeight = "normal";
    indexButton7.style.fontWeight = "normal";
    indexButton8.style.fontWeight = "normal";
    indexButton9.style.fontWeight = "normal";
    indexButton10.style.fontWeight = "normal";
    indexButton11.style.fontWeight = "normal";
    indexButton12.style.fontWeight = "normal";
    indexButton13.style.fontWeight = "normal";
    indexButton14.style.fontWeight = "normal";
    indexButton15.style.fontWeight = "normal";
    indexButton16.style.fontWeight = "normal";
    indexButton17.style.fontWeight = "normal";
    indexButton18.style.fontWeight = "normal";
  }
}
//Rastrear el click en en DOM dinamico
const handleDomCLick = (event) => {
  const clickedBtn = event.target;
  const classIdentifier = clickedBtn.className.slice(0, 4);
  let modal = {};
  if (classIdentifier === "open") {
    modal = document.querySelector(clickedBtn.dataset.modalTarget);
    openModal(modal);
  } else if (classIdentifier === "clos") {
    modal = clickedBtn.closest(".modal");
    closeModal(modal);
  } else if (classIdentifier === "para") {
    let targetIdButton = "buttonParag" + currentParagNumber;
    const pointedButton = document.getElementById(targetIdButton);
    pointedButton.style.backgroundColor = "#1d3e8b";
  }
};

const handleOverlayClick = (event) => {
  const clickedBtn = event.target;
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
};

//Siguiente pagina
function nextPage() {
  if (currentPage < Object.keys(textData).length - 1) {
    currentPage++;
    setSlidetoInitial();
    setParagh(1);
    cachePage();
    masterRender();
  }
}

//Pagina anterior
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    cachePage();
    masterRender();
  }
}

//Pagina arbitraria
function setPage(value) {
  currentPage = value;
  setSlidetoInitial();
  setParagh(1);
  cachePage();
  masterRender();
}
//Guardar en la memoria cache
function cachePage() {
  let currentPageString = String(currentPage);
  localStorage["boo1Unefco"] = currentPageString;
}

//Crear el DOM dinamico
function createStructure(
  titles,
  text,
  layout,
  page,
  popUp,
  images,
  buttonName,
  buttonsPageNumber,
  links
) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "Alayout") {
    content = ALayoutGenerator(titles, text, page);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, text, page);
  } else if (currentLayout === "Clayout") {
    content = CLayOutGenerator(titles, text, page);
  } else if (currentLayout === "Dlayout") {
    content = DLayOutGenerator(titles, text, page, images, popUp);
  } else if (currentLayout === "Elayout") {
    content = ELayOutGenerator(images, page, buttonName, buttonsPageNumber);
  } else if (currentLayout === "Flayout") {
    content = FLayOutGenerator(titles, text, images, page, links);
  } else if (currentLayout === "Glayout") {
    content = GLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Hlayout") {
    content = HLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Ilayout") {
    content = ILayOutGenerator(titles, text, images, page, links);
  } else if (currentLayout === "Jlayout") {
    content = JLayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Klayout") {
    content = KLayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Llayout") {
    content = LLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Mlayout") {
    content = MLayOutGenerator(titles, text, images, page, buttonName);
  } else if (currentLayout === "Nlayout") {
    content = NLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Wlayout") {
    content = WLayOutGenerator(titles, text, page, popUp);
  }
  return content;
}
// Plantilla A
function ALayoutGenerator(titles, text, page) {
  return `
  <div class="Alayout-container">
    <img id="caratula" src="images/caratula.png">
      <div class="button-caratula-container">
        <button class="nav-buttons" id="comenzar-button" onclick="nextPage()">Comienza</button>
      </div>
  </div>  `;
}

// Plantilla B
function BLayOutGenerator(titles, text, page) {
  return ` 
  <div id="Blayout-container">
    <h1 class="titles" id="Btitle">${titles[page]}</h1>
    <div id="Btext-container">
      <p class="text" id="Btext">${text[page]}</p>
    </div>
  </div>`;
}

// Plantilla C
function CLayOutGenerator(titles, text, page) {
  return ` 
  <div id="Clayout-container">
    <h1 class="titles" id="Ctitle">${titles[page]}</h1>
    <div id="Cindex-buttons">
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(3)">Ir</button> 
        <p class="index-text">Presentaci&oacuten</p>
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(5)">Ir</button>
        <p class="index-text">TEMA 1: BASE NORMATIVA</p> 
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(7)">Ir</button>
        <p class="index-text">Normativa internacional</p>
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(8)">Ir</button>
        <p class="index-text">Normativa nacional</p>
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(10)">Ir</button>
        <p class="index-text">Protocolo de prevención</p>
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(11)">Ir</button>
        <p class="index-text">Estrategias para la Prevención de Conflictos</p>   
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(12)">Ir</button>
        <p class="index-text">TEMA 2: COMPRENDER EL CONFLICTO EN EL ENTORNO EDUCATIVO</p>   
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(17)">Ir</button>
        <p class="index-text">El conflicto y sus características</p>     
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(19)">Ir</button>
        <p class="index-text">Conflictos entre estudiantes</p>       
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(23)">Ir</button>
        <p class="index-text">Factores de riesgo en la unidad educativa</p>       
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(24)">Ir</button>
        <p class="index-text">Violencia en el ámbito educativo</p>       
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(26)">Ir</button>
        <p class="index-text">Glosario de violencia</p>         
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(33)">Ir</button>
        <p class="index-text">TEMA 3: ENFOQUE RESTAURATIVO</p>         
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(35)">Ir</button>
        <p class="index-text">La importancia del enfoque restaurativo</p>         
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(38)">Ir</button>
        <p class="index-text">Diferencias entre el enfoque restaurativo y punitivo en el ámbito educativo</p>         
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(41)">Ir</button>
        <p class="index-text">Características y principios del enfoque restaurativo</p>         
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(44)">Ir</button>
        <p class="index-text">Ventana de la disciplina social</p>         
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(49)">Ir</button>
        <p class="index-text">Glosario</p>         
      </div>
      <div class="button-index-container">
        <button class="jump-buttons" onclick="setPage(50)">Ir</button>
        <p class="index-text">Bibliografia</p>          
      </div>
    </div>
  </div>`;
}

// Plantilla D
function DLayOutGenerator(titles, text, page, images, popUp) {
  return `<h1 class="titles">${titles[page]}</h1>
  <div id="Dlayout-container">
  <div id="Dbutton">
    <div id="Dmodals-container">
    ${modalGenerator(popUp, page, 0)}
    </div>
  </div> 
  <div id="Dtext">
    <p class="text">${text[page]}</p>
  </div>
  <div id="Dimage-container">
  <img id="Dimage" src="images/${images[page]}">
  </div>
  </div>`;
}

// Plantilla E
function ELayOutGenerator(images, page, buttonName, buttonsPageNumber) {
  return `
  <div id="Elayout-container">
    <div id="Eimage-container">
      <img id="Eimage" src="images/${images[page]}">
    </div>
    <div id="index-button-container">
      <div id="index-buttons">
        <div class="button-index-container"><button class="jump-buttons" onclick="setPage(${buttonsPageNumber[page][0]})">${buttonName[page][0]}</button></div>
        <div class="button-index-container"><button class="jump-buttons" onclick="setPage(${buttonsPageNumber[page][1]})">${buttonName[page][1]}</button></div>
        <div class="button-index-container"><button class="jump-buttons" onclick="setPage(${buttonsPageNumber[page][2]})">${buttonName[page][2]}</button></div>
        <div class="button-index-container"><button class="jump-buttons"onclick="setPage(${buttonsPageNumber[page][3]})">${buttonName[page][3]}</</button></div>
      </div>
    </div>
  </div>`;
}

// Plantilla F
function FLayOutGenerator(title, text, images, page, links) {
  return `
  <div id="Flayout-container">
    <div id="Fcolumn1">
      <img id="act-inicio-img" src="images/${images[page][0]}">
      <h1 class="titles">${title[page]}</h1>
      <p class="text"> ${text[page]}</p>
    </div>
    <div id="Fcolumn2">
      <img id="Flayout-img" src="images/${images[page][1]}">
      <!--<button class="nav-buttons" id="Fdownload-button"> DESCARGAR</button> -->
      <div id="Flink-container">
        <a id="Flink" href="${links[page]}">DESCARGAR</a>
      </div>
    </div>
  </div>`;
}

// Plantilla G
function GLayOutGenerator(title, text, page, popUp) {
  return `
  <div id="Glayout-container">
    <div id="Grow1">
      <h1 class="titles" id ="Gtitle1">${title[page][0]}</h1>
      <p class="text">${text[page][0]}</p>
    </div>
    <div id="Grow2">
      <h1 class="titles" id ="Gtitle2">${title[page][1]}</h1>
    </div>
    <div id="Grow3"> 
      <div id="Gmodal-container">${modalGenerator(popUp, page, 0)}</div> 
      <div id="Gnext-modal"><p class="text">${text[page][1]}</p></div>
    </div>
  </div>`;
}

// Plantilla H
function HLayOutGenerator(title, text, page, popUp) {
  return `
  <div id="Hlayout-container">
    <div id="Hrow1">
      <h1 class="titles" id="Htitle1">${title[page][0]}</h1>
      <div id="Htext1">
        <p class="text">${text[page][0]}</p>
      </div>
      <div id="Hmodals-container1">
        ${modalGenerator(popUp, page, 0)}
      </div>
    </div>
    <div id="Hrow2">
      <h1 class="titles" id="Htitle2">${title[page][1]}</h1>
      <div id="Htext2">
        <p class="text">${text[page][1]}</p>
      </div>
      <div id="Hmodals-container2">
        ${modalGenerator(popUp, page, 1)}
      </div>
    </div>
  </div>`;
}

// Plantilla I
function ILayOutGenerator(title, text, images, page, links) {
  return `
  <div id="Ilayout-container">
    <div id="Icolumn1">
      <div id="Icolumn1-image-container">
        <img id="Iimage-column1" src="images/para_profundizar.png" />
      </div>
      <h1 class="titles" id="Ititle">${title[page]}</h1>
      <div id="Itext-container">
        <p class="text" id="Itext">${text[page]}</p>
      </div>
    </div>
    <div id="Icolumn2">
      <div id="Icolumn2-image-container">
        <img id ="Iimage-column2" src="images/${images[page][0]}" />
      </div>
      <div id="Ilink-container">
        <a id="Ilink" href="${links[page]}">DESCARGAR</a>
      </div>
    </div>
    <div id="Icolumn3">
      <div id="Icolumn3-image-container">
        <img id ="Iimage-column3" src="images/${images[page][1]}" />
      </div>
    </div>
  </div>`;
}

// Plantilla J
function JLayOutGenerator(title, text, images, page) {
  let numberOfSlidesCarousel = images[page].length;
  return `
  <div id="Jlayout-container">
    <h1 class="titles" id="Jtitle">${title[page]}</h1>
    <div id= "Jtext-container">
      <p class="text" id="Jtext">${text[page]}</p>
    </div>
    <div id="Jcarousel-container">
        <div id="Jcarousel">
          <img id="Jimage" src="images/${images[page][currentSlideNumberCarousel]}">
        </div>
        <div id="JnextSlide-container">
          <button class="SlideCarouselButton" onclick ="nextSlide(${numberOfSlidesCarousel})" >❯</button>
        </div>
        <div id="JprevSlide-container">  
            <button class="SlideCarouselButton" onclick ="prevSlide()">❮</button>
        </div>
    </div>
  </div>`;
}

//Carrusel siguiente
function nextSlide(numberOfSlides) {
  if (currentSlideNumberCarousel < numberOfSlides - 1) {
    currentSlideNumberCarousel++;
    masterRender();
  }
}

//Carrusel anterior
function prevSlide() {
  if (currentSlideNumberCarousel > 0) {
    currentSlideNumberCarousel--;
    masterRender();
  }
}

//Carrusel arbitrario
function setSlidetoInitial() {
  currentSlideNumberCarousel = 0;
}

//Plantilla K
function KLayOutGenerator(title, text, images, page) {
  return `
  <div id="Klayout-container">
    <h1 class="titles" id="Ktitle">${title[page]}</h1>
    <div id="Ktext-container1">
      <p class="text" id="Ktext1">${text[page][0]}</p>
    </div>
    <div id="Kimage-container">
      <img id="Kbanner" src="images/${images[page]}">
    </div>
    <div id="Ktext-container2">
      <p class="text" id="Ktext2">${text[page][1]}</p>
    </div>
  </div>`;
}

//Plantilla L
function LLayOutGenerator(title, text, page, popUp) {
  return `
  <div id="Llayout-container">
    <h1 class="titles" id="Ltitle">${title[page]}</h1>
    <div id="Ltext-container">
      <p class="text" id="Ltext">${text[page]}</p>
    </div>
    <div id="Lmodals-container">
      ${modalGenerator(popUp, page, 0)}
    </div>
  </div>`;
}

//Plantilla M
function MLayOutGenerator(title, text, images, page, buttonName) {
  let numberOfParagraphs = text[page].length;
  return `
  <div id="Mlayout-container">
    <h1 class="titles" id="Mtitle">${title[page]}</h1>
    <div id="Mtext-container">
      <p class="text" id="Mtext">${text[page][0]}</p>
    </div>
    <div id="Mcarousel-container">
      <div id="Mbuttons">
        <div id="Mbuttons-container">
          ${MbuttonGenerator(numberOfParagraphs, page, buttonName)}
        </div>
      </div>
      <div id="Mparag-container">
        <p class="text" id="Mparag">${text[page][currentParagNumber]}</p>
      </div>
    </div>
  </div>`;
}

function MbuttonGenerator(numberOfParagraphs, page, buttonName) {
  let result = "";
  for (let i = 1; i < numberOfParagraphs; i++) {
    result =
      result +
      `<button class="paragButton" id="buttonParag${i}" onclick ="setParagh(${i})" >${
        buttonName[page][i - 1]
      }</button>`;
  }
  return result;
}

function setParagh(numberToSet) {
  currentParagNumber = numberToSet;
  masterRender();
}

//Plantilla N
function NLayOutGenerator(title, text, page, popUp) {
  return `<div id="Nlayout-container">
  <h1 class="titles" id="Ntitle">${title[page]}</h1>
  <div id="Ntext-container">
    <div id="Ntext-containerLeft">
      <p class="text" id="Ltext1">${text[page][0]}</p>
    </div>
    <div id="Ntext-containerRight">
      <p class="text" id="Ltext2">${text[page][1]}</p>
    </div>
  </div>
  <div id="Nmodals-container">
  ${modalGenerator(popUp, page, 0)}
  </div>
  </div>`;
}

function WLayOutGenerator(titles, text, page, popUp) {
  return `<h2>${
    titles[page]
  }</h2> <button data-modal-target="#modal0" class="open-button0">Open Modal</button>
    <div class="modal" id="modal0">
      <div class="modal-header">
        <div class="title">${modalExtractor(popUp, page, "title", 0)}</div>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        ${modalExtractor(popUp, page, "contentModal", 0)}
      </div>
    </div>
    <button data-modal-target="#modal1" class="open-button1">Open Modal</button>
    <div class="modal" id="modal1">
      <div class="modal-header">
        <div class="title">${modalExtractor(popUp, page, "title", 1)}</div>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        ${modalExtractor(popUp, page, "contentModal", 1)}
      </div>
    </div>`;
}

//Generar los pop-ups
function modalGenerator(popUp, page, selector) {
  let initial = 0;
  let final = 0;
  const numberOfModals = popUp[page].length;
  final = numberOfModals;
  if (numberOfModals > 4) {
    if (selector === 0) {
      initial = 0;
      final = 5;
    } else {
      initial = 5;
      final = 10;
    }
  }

  let result = "";

  for (let i = initial; i < final; i++) {
    result =
      result +
      `<div id="modal-container${i}">
        <button data-modal-target="#modal${i}" 
          class="open-button${i}">${modalExtractor(
        popUp,
        page,
        "buttonName",
        i
      )}
        </button>
        <div class="modal" id="modal${i}">
          <div class="modal-header">
            <div class="title">${modalExtractor(popUp, page, "title", i)}</div>
            <button data-close-button class="close-button">&times;</button>
          </div>
          <div class="modal-body">
            ${modalExtractor(popUp, page, "contentModal", i)}
          </div>
        </div>
      </div>`;
  }
  return result;
}

//extraer la informacion de los modals
function modalExtractor(popUps, page, partofModal, numberModal) {
  if (partofModal === "title") {
    return popUps[page][numberModal].title;
  } else if (partofModal === "contentModal") {
    if (popUps[page][numberModal].typeofContent === "text") {
      return popUps[page][numberModal].contentModal;
    } else {
      return `<img id="image-modal-body" src="images/${popUps[page][numberModal].contentModal}">`;
    }
  } else if (partofModal === "buttonName") {
    return popUps[page][numberModal].buttonName;
  } else if (partofModal === "typeofContent") {
    return popUps[page][numberModal].typeofContent;
  }
}

//abrir pop-up
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

//cerrar pop-up
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
// Initial render
function masterRender() {
  renderPage();
  const pointedButton = document.getElementById("buttonParag1");
  if (pointedButton && currentParagNumber === 1) {
    pointedButton.style.backgroundColor = "#1d3e8b";
  }
}
masterRender();

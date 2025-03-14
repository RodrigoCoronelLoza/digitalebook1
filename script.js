let currentPage = 0;

function renderPage() {
  const pageContent = document.getElementById("page-content");
  const titleContainer = document.getElementById("book-title-container");
  const menuHeader = document.getElementById("menu-header");
  const advButton = document.getElementById("adv-buttons");

  const overlay = document.getElementById("overlay");

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

  pageContent.className = layoutData[currentPage];
  //   pageContent.innerHTML = pageData.content;
  pageContent.innerHTML = createStructure(
    titlesData,
    textData,
    layoutData,
    currentPage,
    popUpData,
    imagesData
  );

  // console.log(modalGenerator(popUpData, 4));
}

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
  }
};

const handleOverlayClick = (event) => {
  //   console.log("en el overlay");
  const clickedBtn = event.target;
  //   console.log(clickedBtn);
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
};

function nextPage() {
  if (currentPage < Object.keys(textData).length - 1) {
    currentPage++;
    renderPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

function setPage(value) {
  // console.log(value);
  currentPage = value;
  renderPage();
}

function createStructure(titles, text, layout, page, popUp, images) {
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
    content = ELayOutGenerator(images, page);
  } else if (currentLayout === "Flayout") {
    content = FLayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Glayout") {
    content = GLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Hlayout") {
    content = HLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Ilayout") {
    content = ILayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Jlayout") {
    content = JLayOutGenerator(titles, images, page);
  } else if (currentLayout === "Klayout") {
    content = KLayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Llayout") {
    content = LLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Mlayout") {
    content = MLayOutGenerator(titles, text, images, page);
  } else if (currentLayout === "Nlayout") {
    content = NLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Wlayout") {
    content = WLayOutGenerator(titles, text, page, popUp);
  }
  return content;
}

function ALayoutGenerator(titles, text, page) {
  return `<div class="caratula-container">
  <img class="caratula"> <div class="button-caratula-container"><button class="nav-buttons" id="comenzar-button" onclick="nextPage()">Comienza</button></div></div>  `;
}

function BLayOutGenerator(titles, text, page) {
  return ` <div id="Blayout-container">
  <h1 class="titles" id="Btitle">${titles[page]}</h1>
  <div id="Btext-container">
  <p class="text" id="Btext">${text[page]}</p>
  </div>
  </div>`;
}

function CLayOutGenerator(titles, text, page) {
  return ` 
  <div id="Clayout-container">
  <h1 class="titles" id="Ctitle">${titles[page]}</h1>
  <div id="Cindex-buttons">
  
  <div class="button-index-container"><button class="jump-buttons">Ir</button> Presentacion</div>
  <div class="button-index-container"><button class="jump-buttons" onclick="setPage(2)">Ir</button>Tema 1 Base Normativa</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>Actividad de inicio</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>1.1.Normativa internacional</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>1.2.Normativa nacional</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>1.3.Ministerio de educacion</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>Tema 2 Comprender el conflicto en el entorno educativo</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>Actividad de inicio</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>2.1.Conflicto en el ámbito educativo</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>2.2.Factores de riesgo en la Unidad Educativa</div>
  <div class="button-index-container"><button class="jump-buttons" onclick="setPage(2)">Ir</button>2.3.Resolución de conflictos</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>2.4.Protagonismo estudiantil para la resolución de conflictos</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>Tema 3</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>Actividad de inicio</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>3.1.Enfoque de derechos como base para el enfoque restaurativo</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>3.2.Enfoque restaurativo</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>3.3.Características y principios del enfoque restaurativo</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>Glosario</div>
  <div class="button-index-container"><button class="jump-buttons">Ir</button>Bibliografia</div>
  
  </div>
  </div>`;
}

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

function ELayOutGenerator(images, page) {
  return `<div id="Elayout-container"><div id="Eimage-container"><img id="Eimage" src="images/${images[page]}"></div>
  <div id="index-button-container"><div id="index-buttons">
  <div class="button-index-container"><button class="jump-buttons">Actividad de inicio</button></div>
  <div class="button-index-container"><button class="jump-buttons" onclick="setPage(2)">1.1 Normativa internacional</button></div>
  <div class="button-index-container"><button class="jump-buttons">1.2. Normativa nacional</button></div>
  <div class="button-index-container"><button class="jump-buttons">1.3. Ministerio de educacion</button></div>
  </div></div></div>`;
  // return `<div>${images[page]}</div>`;
}

function FLayOutGenerator(title, text, images, page) {
  return `<div id="Flayout-container">
  <div id="Fcolumn1">
  <img id="act-inicio-img" src="images/actividad_inicio.jpeg">
  <h1 class="titles">${title[page]}</h1>
  <p class="text"> ${text[page]}</p>
  </div>
  <div id="Fcolumn2">
  <img id="Flayout-img" src="images/${images[page]}">
  <button class="nav-buttons" id="Fdownload-button"> DESCARGAR</button>
  </div>
  </div>`;
}

function GLayOutGenerator(title, text, page, popUp) {
  return `<div id="Glayout-container">
  <div id="Grow1">
  <h1 class="titles">${title[page][0]}</h1>
  <p class="text">${text[page][0]}</p>
  </div>
  <div id="Grow2">
  <h1 class="titles">${title[page][1]}</h1>
  </div>
  <div id="Grow3"> 
  <div id="Gmodal-container">${modalGenerator(popUp, page, 0)}</div> 
  <div id="Gnext-modal"><p class="text">${text[page][1]}</p></div>
  </div>
  </div>`;
}

function HLayOutGenerator(title, text, page, popUp) {
  console.log(modalGenerator(popUp, page, 0));
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
function ILayOutGenerator(title, text, images, page) {
  // console.log(images[page][0]);
  return `<div id="Ilayout-container">
  <div id="Icolumn1">
  <div id="Icolumn1-image-container">
      <img id="Iimage-column1" src="images/para_profundizar.jpeg" />
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
  <button class="nav-buttons" id="Idownload-button"> DESCARGAR</button>
  </div>
  <div id="Icolumn3">
  <div id="Icolumn3-image-container">
      <img id ="Iimage-column3" src="images/${images[page][1]}" />
  </div></div>
</div>`;
}
function JLayOutGenerator(title, images, page) {
  return `
  <div id="Jlayout-container">
    <h1 class="titles" id="Jtitle">${title[page]}</h1>
    <div id="Jcarousel-container">
        <div id="Jcarousel">
          <img id="Jimage" src="images/${images[page][0]}">
        </div>
    </div>
  </div>`;
}
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
function LLayOutGenerator(title, text, page, popUp) {
  return `<div id="Llayout-container">
  <h1 class="titles" id="Ltitle">${title[page]}</h1>
  <div id="Ltext-container">
  <p class="text" id="Ltext">${text[page]}</p>
  </div>
  <div id="Lmodals-container">
  ${modalGenerator(popUp, page, 0)}
  </div>
  </div>`;
}
function MLayOutGenerator(title, text, images, page) {
  return `<div id="Mlayout-container">
  <h1 class="titles" id="Mtitle">${title[page]}</h1>
  <div id="Mtext-container">
  <p class="text" id="Mtext">${text[page]}</p>
  </div>
  <div id="Mcarousel-container">
    <img id="Mimage" src="images/${images[page]}">
  </div>
</div>`;
}
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

  // let result = `<div class="modals-container">`;

  let result = "";

  for (let i = initial; i < final; i++) {
    result =
      result +
      `<div id="modal-container${i}"><button data-modal-target="#modal${i}" class="open-button${i}">${modalExtractor(
        popUp,
        page,
        "buttonName",
        i
      )}</button>
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
  // result = result + `</div>`;
  return result;
}
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

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
// Initial render
renderPage();

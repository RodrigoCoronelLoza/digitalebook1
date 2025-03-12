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

  console.log(modalGenerator(popUpData, 4));
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
  console.log(value);
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
  return ` <h1 class="titles">${titles[page]}</h1><p class="text">${text[page]}</p>`;
}

function CLayOutGenerator(titles, text, page) {
  return ` <h1 class="titles">${titles[page]}</h1><div id="index-buttons">
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
  </div>`;
}

function DLayOutGenerator(titles, text, page, images, popUp) {
  return `<h1 class="titles">${
    titles[page]
  }</h1><div id="Dlayout-container"><div id="Dbutton">${modalGenerator(
    popUp,
    page
  )}</div><div id="Dtext"><p class="text">${
    text[page]
  }</p></div><div id="Dimage-container"><img id="Dimage" src="images/${
    images[page]
  }"></div></div>`;
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
  <div id="Gmodal-container">${modalGenerator(popUp, page)}</div> 
  <div id="Gnext-modal"><p class="text">${text[page][1]}</p></div>
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

function modalGenerator(popUp, page) {
  const numberOfModals = popUp[page].length;
  let result = `<div class="modals-container">`;

  for (let i = 0; i < numberOfModals; i++) {
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
  result = result + `</div>`;
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

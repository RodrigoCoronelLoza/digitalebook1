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
    popUpData
  );
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

function createStructure(titles, text, layout, page, popUp) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "Alayout") {
    content = ALayoutGenerator(titles, text, page);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, text, page);
  } else if (currentLayout === "Clayout") {
    content = CLayOutGenerator(titles, text, page);
  } else if (currentLayout === "Dlayout") {
    content = DLayOutGenerator(titles, text, page);
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
  return ` <h1>${titles[page]}</h1><p>${text[page]}</p>`;
}

function CLayOutGenerator(titles, text, page) {
  return ` <h1>${titles[page]}</h1><div id="index-buttons">
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

function DLayOutGenerator(titles, text, page) {
  return `<div id="Dbutton">Hola</div><div id="Dtext">Bola</div><div id="Dimage">Hola</div>`;
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
    </h2> <button data-modal-target="#modal1" class="open-button1">Open Modal</button>
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

function modalExtractor(popUps, page, partofModal, numberModal) {
  if (partofModal === "title") {
    return popUps[page][numberModal].title;
  } else if (partofModal === "contentModal") {
    return popUps[page][numberModal].contentModal;
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

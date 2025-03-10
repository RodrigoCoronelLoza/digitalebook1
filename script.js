let currentPage = 0;
const pageContent = document.getElementById("page-content");
function renderPage() {
  const homeButton = document.getElementById("home-button");
  const overlay = document.getElementById("overlay");

  pageContent.addEventListener("click", handleDomCLick);
  overlay.addEventListener("click", handleOverlayClick);

  if (currentPage === 0) {
    homeButton.style.display = "none";
  } else {
    homeButton.style.display = "block";
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
  } else if (classIdentifier === "close-button") {
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
  if (currentLayout === "menu") {
    content = menuLayoutGenerator(titles, text, page);
  } else if (currentLayout === "Alayout") {
    content = ALayOutGenerator(titles, text, page);
  } else if (currentLayout === "Blayout") {
    content = BLayOutGenerator(titles, text, page, popUp);
  } else if (currentLayout === "Clayout") {
    content = CLayOutGenerator(titles, text, page);
  }
  return content;
}

function menuLayoutGenerator(titles, text, page) {
  return `<h1 class="menutitle">${titles[page]}</h1> <div><button onclick="setPage(2)">Tema1</button><button>Tema2</button></div> <p>${text[page]}</p> `;
}

function ALayOutGenerator(titles, text, page) {
  return `<p>${text[page]}</p><h1>${titles[page]}</h1>`;
}

function BLayOutGenerator(titles, text, page, popUp) {
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

function CLayOutGenerator(titles, text, page) {
  return `<h1>${titles[page]}</h1><p>${text[page]}</p>`;
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

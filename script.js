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
    currentPage
  );
}

const handleDomCLick = (event) => {
  const clickedBtn = event.target;
  const classIdentifier = clickedBtn.className;
  let modal = {};
  if (classIdentifier === "open-button") {
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

function createStructure(titles, text, layout, page) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "menu") {
    content = `<h1 class="menutitle">${titles[page]}</h1> <div><button onclick="setPage(2)">Tema1</button><button>Tema2</button></div> <p>${text[page]}</p> `;
  } else if (currentLayout === "layout1") {
    content = `<p>${text[page]}</p><h1>${titles[page]}</h1>`;
  } else if (currentLayout === "layout2") {
    content = `<h2>${titles[page]}</h2> <button data-modal-target="#modal" class="open-button">Open Modal</button>
    <div class="modal" id="modal">
      <div class="modal-header">
        <div class="title">Example Modal</div>
        <button data-close-button class="close-button">&times;</button>
      </div>
      <div class="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod alias
        ut illo doloremque eum ipsum obcaecati distinctio debitis reiciendis
        quae quia soluta totam doloribus quos nesciunt necessitatibus,
        consectetur quisquam accusamus ex, dolorum, dicta vel? Nostrum
        voluptatem totam, molestiae rem at ad autem dolor ex aperiam. Amet
        assumenda eos architecto, dolor placeat deserunt voluptatibus tenetur
        sint officiis perferendis atque! Voluptatem maxime eius eum dolorem
        dolor exercitationem quis iusto totam! Repudiandae nobis nesciunt sequi
        iure! Eligendi, eius libero. Ex, repellat sapiente!
      </div>
    </div>`;
  } else if (currentLayout === "layout3") {
    content = `<h1>${titles[page]}</h1><p>${text[page]}</p>`;
  }
  return content;
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

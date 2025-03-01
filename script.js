// const bookPages = [
//   {
//     layout: "layout1",
//     content: "<h2>Chapter 1</h2><p>This is the introduction to our book...</p>",
//   },
//   {
//     layout: "layout2",
//     content:
//       "<img src='https://via.placeholder.com/150'><p>Here is an image with some text...</p>",
//   },
//   {
//     layout: "layout3",
//     content:
//       "<p>This page is using a two-column layout...</p><p>More text in the second column.</p>",
//   },
// ];

let currentPage = 0;

function renderPage() {
  const pageContent = document.getElementById("page-content");
  //   const pageData = bookPages[currentPage];

  pageContent.className = layoutData[currentPage];
  //   pageContent.innerHTML = pageData.content;
  pageContent.innerHTML = createStructure(
    titlesData,
    textData,
    layoutData,
    currentPage
  );
  
}

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

function createStructure(titles, text, layout, page) {
  let currentLayout = layout[page];
  let content = "";
  if (currentLayout === "layout1") {
    content = `<h1>${titles[page]}</h1><p>${text[page]}</p>`;
  } else if (currentLayout === "layout2") {
    content = `<p>${text[page]}</p><h1>${titles[page]}</h1>`;
  } else if (currentLayout === "layout3") {
    content = `<h2>${titles[page]}</h2>`;
  }
  return content;
}

// Initial render
renderPage();

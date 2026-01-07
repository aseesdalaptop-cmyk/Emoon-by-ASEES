document.addEventListener("DOMContentLoaded", function () {

  const list = document.getElementById("ebook-list");

  if (!list) {
    alert("ebook-list div not found ❌");
    return;
  }

  const ebooks = [
    { title: "Ebook One" },
    { title: "Ebook Two" },
    { title: "Ebook Three" }
  ];

  ebooks.forEach(book => {
    const div = document.createElement("div");
    div.textContent = book.title;
    list.appendChild(div);
  });

});

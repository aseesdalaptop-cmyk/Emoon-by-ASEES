document.addEventListener("DOMContentLoaded", () => {

  const list = document.getElementById("ebook-list");

  if (!list) {
    console.error("ebook-list not found");
    return;
  }

  const ebooks = [
    { title: "Start Online Income" },
    { title: "Affiliate Mastery" },
    { title: "Mindset of Winners" }
  ];

  ebooks.forEach(book => {
    const card = document.createElement("div");
    card.textContent = book.title;
    list.appendChild(card);
  });

});

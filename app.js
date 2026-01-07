document.addEventListener("DOMContentLoaded", () => {
const ebooks = [
  {
    id: 1,
    title: "Start Online Income",
    price: "₹199",
    desc: "Beginner guide to earning online step by step."
  },
  {
    id: 2,
    title: "Affiliate Mastery",
    price: "₹299",
    desc: "Learn how to earn with referrals and commissions."
  },
  {
    id: 3,
    title: "Mindset of Winners",
    price: "₹149",
    desc: "Build discipline, focus and money mindset."
  }
];

const list = document.getElementById("ebook-list");

ebooks.forEach(book => {
  const card = document.createElement("div");
  card.className = "ebook-card";

  card.innerHTML = `
    <h3>${book.title}</h3>
    <p>${book.desc}</p>
    <strong>${book.price}</strong>
    <button onclick="buyEbook('${book.title}')">Buy Ebook</button>
  `;

  list.appendChild(card);
});

function buyEbook(title) {
  alert("You selected: " + title + "\nPayment system coming next 🚀");
}
});


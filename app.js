document.addEventListener("DOMContentLoaded", () => {

  const ebooks = [
    {
      title: "Start Online Income",
      price: "₹199",
      desc: "Beginner guide to earning online"
    },
    {
      title: "Affiliate Mastery",
      price: "₹299",
      desc: "Earn with referrals and commissions"
    },
    {
      title: "Mindset of Winners",
      price: "₹149",
      desc: "Discipline, focus and success mindset"
    }
  ];

  const list = document.getElementById("ebook-list");

  ebooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "ebook";

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.desc}</p>
      <strong>${book.price}</strong>
      <button>Buy</button>
    `;

    card.querySelector("button").onclick = () => {
      alert("Buying: " + book.title + "\nPayment coming soon 🚀");
    };

    list.appendChild(card);
  });

});

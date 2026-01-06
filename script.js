const user = {
  referral: "EM" + Math.random().toString(36).substring(2,6).toUpperCase(),
  commission: 0
};

function openBook(name) {
  alert("📖 Opening " + name + "\nEnjoy your space journey 🌙");
}

function buyBook(name, price) {
  if (confirm("Buy " + name + " for ₹" + price + "?")) {
    user.commission += price * 0.5;
    alert(
      "✅ Purchase successful!\n" +
      "Your commission: ₹" + user.commission
    );
  }
}

function showReferral() {
  alert(
    "👨‍🚀 Your Referral Code:\n\n" +
    user.referral +
    "\n\nShare & earn 50% commission!"
  );
}

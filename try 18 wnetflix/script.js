var faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});

const buttons = document.getElementsByClassName("getStartedBtn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailInput").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      alert("Please enter your email address.");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      window.location.href = "movie.html";
    }
  });
}

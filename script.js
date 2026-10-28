
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
      `تشکر ${name} عزیز! این فرم هنوز به سیستم ارسال پیام وصل نیست.`;

    contactForm.reset();
  });
}

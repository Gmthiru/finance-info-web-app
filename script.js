document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields correctly.");
    return;
  }
  alert("Message submitted!");
  this.reset();
});

window.onload = function () {
  fetch('data.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "text/xml");
      const tips = xmlDoc.getElementsByTagName("tip");
      const list = document.getElementById("xmlTips");
      if (list) {
        for (let i = 0; i < tips.length; i++) {
          const li = document.createElement("li");
          li.textContent = tips[i].textContent;
          list.appendChild(li);
        }
      }
    });
};

const poster = document.querySelector("#poster-dialog");

for (const link of document.querySelectorAll("[data-poster]")) {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (typeof poster.showModal !== "function") return;
    event.preventDefault();
    poster.showModal();
  });
}

document.querySelector("#close-poster").addEventListener("click", () => poster.close());

const navigation = document.querySelectorAll(".topbar nav a");

function updateNavigation() {
  const active = location.hash === "#council" ? "#film" : location.hash || "#home";
  for (const link of navigation) {
    if (link.hash === active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

window.addEventListener("hashchange", updateNavigation);
updateNavigation();

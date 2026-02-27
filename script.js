// Mobile nav
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // close on link click (mobile)
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Quick estimate form -> opens mail draft (no setup needed)
const quickForm = document.getElementById("quickForm");
if (quickForm) {
  quickForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(quickForm);
    const name = data.get("name")?.toString().trim() || "";
    const contact = data.get("contact")?.toString().trim() || "";
    const service = data.get("service")?.toString().trim() || "";
    const details = data.get("details")?.toString().trim() || "";

    const to = "nexgencarpetcleaningreno@gmail.com"; // change if needed
    const subject = encodeURIComponent(`Estimate Request - ${service}`);
    const body = encodeURIComponent(
`Name: ${name}
Contact: ${contact}
Service: ${service}

Details:
${details}

Sent from the Nex Gen website.`
    );

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

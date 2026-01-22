// ============================
// Open all external links in new tab
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="http"]');

  links.forEach((link) => {
    const url = new URL(link.href);

    // only open in new tab if link is NOT your website domain
    if (url.hostname !== window.location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});


// ============================
// Loader
// ============================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  // Smooth fade out
  loader.classList.add("hide");

  // Remove from DOM after fade
  setTimeout(() => {
    loader.style.display = "none";
  }, 650);
});


// ============================
// Mobile Navbar Toggle
// ============================
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close menu when clicking any link (mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("show"));
  });
}

// ============================
// Footer Year
// ============================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ============================
// Experience Letter Modal
// ============================
function openLetterModal() {
  const modal = document.getElementById("letterModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // ✅ Lock website scroll
  }
}

function closeLetterModal() {
  const modal = document.getElementById("letterModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // ✅ Enable scroll back
  }
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("letterModal");
  if (modal && e.target === modal) closeLetterModal();
});

// Close modal with ESC key
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeLetterModal();
});

// Make these functions accessible for onclick=""
window.openLetterModal = openLetterModal;
window.closeLetterModal = closeLetterModal;

/* =========================================================
   Contact Form - "Message Me" Section (NOT USING NOW)
==========================================================

function handleSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const note = document.getElementById("formNote");

  // Simple validation
  if (!name || !email || !message) {
    note.textContent = "Please fill all fields.";
    return false;
  }

  note.textContent =
    "✅ Message prepared! (This demo doesn't send messages). You can connect it with EmailJS or a backend later.";

  // Optional: Reset
  e.target.reset();
  return false;
}

========================================================== */

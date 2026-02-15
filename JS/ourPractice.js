function toggleText(event) {
    event.preventDefault();
    const toggleLink = event.currentTarget;
    const paragraphId = toggleLink.getAttribute("aria-controls");
    const paragraph = document.getElementById(paragraphId);
    const isExpanded = toggleLink.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      // Collapse paragraph
      paragraph.hidden = true;
      paragraph.classList.remove("expanded");
      toggleLink.setAttribute("aria-expanded", "false");
      toggleLink.querySelector(".toggle-arrow").classList.remove("expanded");
      toggleLink.firstChild.textContent = "See more";
    } else {
      // Expand paragraph
      paragraph.hidden = false;
      // Use setTimeout to allow reflow before adding class for transition
      setTimeout(() => {
        paragraph.classList.add("expanded");
      }, 10);
      toggleLink.setAttribute("aria-expanded", "true");
      toggleLink.querySelector(".toggle-arrow").classList.add("expanded");
      toggleLink.firstChild.textContent = "See less";
    }
  }

  // Optional: Enable keyboard accessibility with Enter/Space key
  document.querySelectorAll('.toggle-link').forEach(link => {
    link.addEventListener('keydown', e => {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        link.click();
      }
    });
  });
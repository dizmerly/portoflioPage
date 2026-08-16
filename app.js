import { profile, projects, photos } from "./site-data.js";

const $ = (selector, scope = document) => scope.querySelector(selector);

function fillProfile() {
  // Keep the photography tab distinct while still pulling your name from data.
  document.title = document.body.classList.contains("photo-page")
    ? `Photography — ${profile.name}`
    : `${profile.name} — ${profile.role}`;
  document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = profile.name));
  document.querySelectorAll("[data-role]").forEach((el) => (el.textContent = profile.role));
  document.querySelectorAll("[data-location]").forEach((el) => (el.textContent = profile.location));
  document.querySelectorAll("[data-bio]").forEach((el) => (el.textContent = profile.bio));
  document.querySelectorAll("[data-social]").forEach((el) => { const url = profile.socials[el.dataset.social]; if (url) el.href = url; });
}

function renderProjects() {
  const container = $("[data-project-list]");
  if (!container) return;
  container.innerHTML = projects.map((project) => `
    <article class="project-card reveal">
      <span class="project-number">${project.number}</span>
      <div><p class="eyebrow">${project.type}</p><h3>${project.title}</h3><p class="project-copy">${project.description}</p><ul class="tags">${project.stack.map((item) => `<li>${item}</li>`).join("")}</ul></div>
      <a class="text-link" href="${project.url}" target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>
    </article>`).join("");
}

function photoCard(photo, index) {
  const media = photo.image ? `<img src="${photo.image}" alt="${photo.title}, ${photo.place}" loading="lazy">` : `<div class="photo-placeholder tone-${photo.tone}" aria-hidden="true"><span>${String(index + 1).padStart(2, "0")}</span></div>`;
  return `<button class="photo-card reveal" type="button" data-photo-index="${index}" aria-label="Open ${photo.title}">${media}<span class="photo-shade"></span><span class="photo-meta"><strong>${photo.title}</strong><em>${photo.place}</em></span></button>`;
}

function renderPhotos() { const container = $("[data-photo-grid]"); if (container) container.innerHTML = photos.map(photoCard).join(""); }

function setupLightbox() {
  const dialog = $("#lightbox"); if (!dialog) return;
  const image = $("[data-lightbox-image]", dialog), placeholder = $("[data-lightbox-placeholder]", dialog), caption = $("[data-lightbox-caption]", dialog);
  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-photo-index]"); if (!card) return;
    const photo = photos[Number(card.dataset.photoIndex)]; caption.textContent = `${photo.title} — ${photo.place}`;
    image.hidden = !photo.image; placeholder.hidden = Boolean(photo.image);
    if (photo.image) image.src = photo.image;
    if (!photo.image) placeholder.className = `lightbox-placeholder tone-${photo.tone}`;
    dialog.showModal();
  });
  $("[data-close-lightbox]", dialog)?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
}

function setupMenu() {
  const button = $("[data-menu-button]"), nav = $("[data-mobile-nav]"); if (!button || !nav) return;
  button.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); button.setAttribute("aria-expanded", String(open)); });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("is-open"); button.setAttribute("aria-expanded", "false"); }));
}

function setupContactForm() {
  const form = $("[data-contact-form]");
  if (!form) return;
  const status = $("[data-form-status]", form);
  const submit = $("button[type='submit']", form);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!profile.formspreeFormId) {
      status.textContent = "Contact form setup is almost done—please add the Formspree form ID.";
      return;
    }
    submit.disabled = true;
    status.textContent = "Sending…";
    try {
      const response = await fetch(`https://formspree.io/f/${profile.formspreeFormId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      status.textContent = "Message sent. Thank you.";
    } catch {
      status.textContent = "Something went wrong. Please try again shortly.";
    } finally {
      submit.disabled = false;
    }
  });
}

function setupHeroMotion() {
  const hero = $(".hero");
  const photo = $(".hero-photo");
  const frame = $(".hero-frame");
  const stage = $(".hero-stage");
  const title = $(".hero-title");
  const kicker = $(".hero-kicker");
  if (!hero || !photo || !stage || !title || !kicker || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // A scroll scene: the photo drifts forward while copy leaves the stage cleanly.
  let frameId;
  const update = () => {
    frameId = undefined;
    const availableScroll = Math.max(1, hero.offsetHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, (window.scrollY - hero.offsetTop) / availableScroll));
    photo.style.transform = `translate3d(0, ${progress * 44}px, 0) scale(${1.04 + progress * 0.12})`;
    photo.style.opacity = String(1 - progress * 0.32);
    frame.style.transform = `scale(${1 - progress * 0.05})`;
    title.style.transform = `translate3d(0, ${progress * -62}px, 0)`;
    title.style.opacity = String(Math.max(0, 1 - progress * 1.1));
    kicker.style.transform = `translate3d(0, ${progress * -32}px, 0)`;
    kicker.style.opacity = String(Math.max(0, 1 - progress * 1.4));
  };
  const requestUpdate = () => {
    if (!frameId) frameId = window.requestAnimationFrame(update);
  };

  window.requestAnimationFrame(() => document.body.classList.add("is-loaded"));
  window.addEventListener("scroll", requestUpdate, { passive: true });
  update();
}

function setupReveals() {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

fillProfile(); renderProjects(); renderPhotos(); setupLightbox(); setupMenu(); setupContactForm(); setupHeroMotion(); setupReveals();

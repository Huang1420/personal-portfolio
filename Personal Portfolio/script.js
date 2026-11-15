'use strict';
// PUBLIC CONFIGURATION
// Replace placeholder values and redeploy. Do not place secrets here.
const PROFILE = {
  name: 'Evan Huang',
  initials: 'EH',
  email: 'dabberhuangsz@gmail.com',
  linkedin: 'https://www.linkedin.com/in/evan-h-a1ba62388/',
  resume: '',
  // Add verified certificates only: { title: 'Certificate name', src: 'images/certificate.jpg' }
  certificates: [],
    photos: {
        // Professional & Academic Journey
        portrait:   { src: 'images/portrait.jpg', position: 0 },
        sats:       { src: 'images/sats.jpeg', position: 35 },
        education:  { src: 'images/education.jpeg', position: 50 },
        gameco:     { src: 'images/gameco.jpeg', position: 50 },
        leadership: { src: 'images/leadership.jpeg', position: 65 },
        // Fields of Interest
        aviation:   { src: 'images/interest-aviation.jpeg', position: 65 },
        business:   { src: 'images/interest-business.jpeg', position: 60 },
        people:     { src: 'images/interest-leadership.jpeg', position: 65 },
        technology: { src: 'images/interest-technology.png', position: 15 },
        // Digital Creations
        hub:         { src: 'images/editorial-hub.png', position: 50 },
        ai:          { src: 'images/editorial-ai.png', position: 35 },
        portfolio:   { src: 'images/personal-portfolio.png', position: 50 },
        experiments: { src: 'images/website-experiments.png', position: 35 },
        // Personal Gallery
        gallery1: { src: 'images/gallery-aviation.jpeg', position: 50 },
        gallery2: { src: 'images/gallery-leadership.jpg', position: 75 },
        gallery3: { src: 'images/gallery-learning.jpeg', position: 50 },
    }
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
function safeText(value, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}
function applyProfile() {
  const profileName = safeText(PROFILE.name, 'Evan Huang');
  const profileInitials = safeText(PROFILE.initials, 'EH').slice(0, 3).toUpperCase();
  $$('[data-name]').forEach((el) => {
    el.textContent = profileName;
  });
  const brandMark = $('.brand-mark');
  const portraitMark = $('.media-placeholder strong');
  if (brandMark) brandMark.textContent = profileInitials;
  if (portraitMark) portraitMark.textContent = profileInitials;
  document.title = profileName === 'Evan Huang'
    ? 'Personal Portfolio | Aviation, Leadership & Innovation'
    : `${profileName} | Personal Portfolio`;
  const yearNode = $('#currentYear');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());
  activateContactLinks();
}
function activateContactLinks() {
  const emailLink = $('#emailLink');
  const linkedinLink = $('#linkedinLink');
  const resumeHeroLink = $('#resumeLink');
  const resumePanelLink = $('#resumePanelLink');
  const fallback = $('#contactFallback');
  let hasVisibleLink = false;
  if (emailLink) {
    const email = safeText(PROFILE.email);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (validEmail) {
      emailLink.href = `mailto:${email}`;
      emailLink.hidden = false;
      hasVisibleLink = true;
    }
  }
  if (linkedinLink) {
    const linkedin = safeText(PROFILE.linkedin);
    try {
      const url = new URL(linkedin);
      const validHost = url.protocol === 'https:' && (url.hostname === 'linkedin.com' || url.hostname.endsWith('.linkedin.com'));
      if (validHost) {
        linkedinLink.href = url.href;
        linkedinLink.target = '_blank';
        linkedinLink.rel = 'noopener noreferrer';
        linkedinLink.hidden = false;
        hasVisibleLink = true;
      }
    } catch (error) {
      // Ignore invalid URLs.
    }
  }
  const resume = safeText(PROFILE.resume);
  if (resume) {
    if (resumeHeroLink) {
      resumeHeroLink.href = resume;
      resumeHeroLink.target = '_blank';
      resumeHeroLink.rel = 'noopener noreferrer';
    }
    if (resumePanelLink) {
      resumePanelLink.href = resume;
      resumePanelLink.target = '_blank';
      resumePanelLink.rel = 'noopener noreferrer';
      resumePanelLink.hidden = false;
      hasVisibleLink = true;
    }
  } else if (resumeHeroLink) {
    resumeHeroLink.href = '#contact';
    resumeHeroLink.textContent = 'Connect with me';
    resumeHeroLink.removeAttribute('target');
    resumeHeroLink.removeAttribute('rel');
  }
  if (fallback && hasVisibleLink) fallback.hidden = true;
}
const photoNodes = new Map();
function getPhotoValue(key) {
  return PROFILE.photos[key] || { src: '', position: 50 };
}
function paintPhoto(key) {
  const node = photoNodes.get(key);
  if (!node) return;
  const value = getPhotoValue(key);
  const image = $('img', node);
  if (!image) return;
  const placeholder = $('.media-placeholder', node);
  const position = Number.isFinite(Number(value.position)) ? Number(value.position) : 50;
  image.style.objectPosition = `50% ${Math.max(0, Math.min(100, position))}%`;
  image.onload = () => {
    image.hidden = false;
    if (placeholder) placeholder.hidden = true;
  };
  image.onerror = () => {
    image.hidden = true;
    if (placeholder) placeholder.hidden = false;
    console.warn('Portfolio image could not load:', value.src);
  };
  if (value.src) {
    if (image.getAttribute('src') !== value.src) {
      image.hidden = true;
      if (placeholder) placeholder.hidden = false;
      image.src = value.src;
    } else if (image.complete && image.naturalWidth > 0) {
      image.hidden = false;
      if (placeholder) placeholder.hidden = true;
    }
  } else {
    image.removeAttribute('src');
    image.hidden = true;
    if (placeholder) placeholder.hidden = false;
  }
}
function initialisePhotos() {
  $$('[data-photo]').forEach(node => photoNodes.set(node.dataset.photo, node));
  photoNodes.forEach((_, key) => paintPhoto(key));
}
function initialiseNavigation() {
  const nav = $('#siteNav');
  const menuToggle = $('#menuToggle');
  if (!nav || !menuToggle) return;
  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  $$('a', nav).forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  if ('IntersectionObserver' in window) {
    const links = $$('a', nav);
    const sections = $$('main section[id]');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('active', link.hash === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-25% 0px -55% 0px' });
    sections.forEach((section) => navObserver.observe(section));
  }
}
function initialiseTheme() {
  const themeToggle = $('#themeToggle');
  if (!themeToggle) return;
  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem('portfolio-theme');
  } catch (error) {
    storedTheme = null;
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme = (darkMode) => {
    document.body.classList.toggle('dark', darkMode);
    themeToggle.setAttribute('aria-pressed', String(darkMode));
    themeToggle.setAttribute('aria-label', darkMode ? 'Switch to light theme' : 'Switch to dark theme');
  };
  setTheme(storedTheme ? storedTheme === 'dark' : prefersDark);
  themeToggle.addEventListener('click', () => {
    const darkMode = !document.body.classList.contains('dark');
    setTheme(darkMode);
    try {
      localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
    } catch (error) {
      // Ignore localStorage failures.
    }
  });
}
function initialiseReveal() {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.body.classList.add('motion-ready');
  const revealNodes = $$('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  revealNodes.forEach((node) => observer.observe(node));
}
function renderCertificates() {
  const grid = $('#certificateGrid');
  const area = $('#certificateArea');
  if (!grid || !area) return;
  for (const cert of PROFILE.certificates) {
    if (!cert.title || !cert.src) continue;
    const figure = document.createElement('figure');
    const img = document.createElement('img'); img.src = cert.src; img.alt = cert.title; img.loading = 'lazy';
    const caption = document.createElement('figcaption'); caption.textContent = cert.title;
    figure.append(img, caption); grid.append(figure);
  }
  area.hidden = !grid.children.length;
}
function startPortfolio() {
  for (const initialise of [applyProfile, initialisePhotos, renderCertificates, initialiseNavigation, initialiseTheme, initialiseReveal]) {
    try { initialise(); } catch (error) { console.error(initialise.name, error); }
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPortfolio, { once: true });
} else {
  startPortfolio();
}

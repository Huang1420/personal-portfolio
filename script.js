'use strict';
// PUBLIC CONFIGURATION
// Replace placeholder values and redeploy. Do not place secrets here.
const PROFILE = {
  name: 'Evan Huang',
  initials: 'EH',
  email: '',
  linkedin: 'https://www.linkedin.com/in/evan-h-a1ba62388/',
  resume: '',
  // Add verified certificates only: { title: 'Certificate name', src: 'images/certificate.jpg' }
  certificates: [],
  // Add numbered files to images/ and list each filename here. No HTML changes needed. Each collection uses one frame. Only publish approved images.
  galleries: {
    sats: [ /* { src: 'images/sats-1.jpeg', caption: 'SATS experience', position: 50 }, */ ],
    education: [ /* { src: 'images/sp-1.jpeg', caption: 'Campus experience' }, */ ],
    gameco: [ /* { src: 'images/gameco-1.jpeg', caption: 'Overseas immersion' }, */ ],
    aviationGallery: [
      { src: 'images/gallery-aviation.jpeg', caption: 'Aviation moments', position: 50 },
      { src: 'images/sats-1.jpeg', position: 50 },
      { src: 'images/sats-2.jpeg', position: 50 },
      { src: 'images/sats-3.jpeg', position: 50 },
      { src: 'images/sats-4.jpeg', position: 50 },
      { src: 'images/sats-5.jpeg', position: 50 },
      { src: 'images/sats-6.jpeg', position: 50 },
      { src: 'images/sats-7.jpeg', position: 50 },
      { src: 'images/sats-8.jpeg', position: 50 },
      { src: 'images/sats-9.jpeg', position: 50 },
      { src: 'images/sats-10.jpeg', position: 50 },
      { src: 'images/sats-11.jpeg', position: 50 },
    ],
    leadershipGallery: [
      { src: 'images/gallery-leadership.jpg', caption: 'Leadership & service', position: 75 },
      { src: 'images/npcc-1.jpeg', position: 50 },
      { src: 'images/npcc-2.jpeg', position: 50 },
      { src: 'images/npcc-3.jpeg', position: 50 },
      { src: 'images/npcc-4.jpeg', position: 50 },
      { src: 'images/npcc-5.jpeg', position: 50 },
      { src: 'images/npcc-6.jpeg', position: 50 },
      { src: 'images/npcc-7.jpeg', position: 50 },
      { src: 'images/npcc-8.jpeg', position: 50 },
      { src: 'images/npcc-9.jpeg', position: 50 },
      { src: 'images/npcc-10.jpeg', position: 50 },
      { src: 'images/npcc-11.jpeg', position: 50 },
      { src: 'images/npcc-12.jpeg', position: 50 },
      { src: 'images/npcc-13.jpeg', position: 50 },
      { src: 'images/npcc-14.jpeg', position: 50 },
      { src: 'images/npcc-15.jpeg', position: 50 },
      { src: 'images/npcc-16.jpeg', position: 50 },
      { src: 'images/npcc-17.jpeg', position: 50 },
      { src: 'images/npcc-18.jpeg', position: 50 },
      { src: 'images/npcc-19.jpeg', position: 50 },
      { src: 'images/npcc-20.jpeg', position: 50 },
      { src: 'images/npcc-21.jpeg', position: 50 },
    ],
    learningGallery: [
      { src: 'images/gallery-learning.jpeg', caption: 'Learning experiences' },
      { src: 'images/learning-1.jpeg', position: 50 },
      { src: 'images/learning-2.jpeg', position: 50 },
      { src: 'images/learning-3.jpeg', position: 50 },
      { src: 'images/learning-4.jpeg', position: 50 },
      { src: 'images/learning-5.jpeg', position: 50 },
      { src: 'images/learning-6.jpeg', position: 50 },
      { src: 'images/learning-7.jpeg', position: 50 },
      { src: 'images/learning-8.jpeg', position: 50 },
      { src: 'images/learning-9.jpeg', position: 50 },
      { src: 'images/learning-10.jpeg', position: 50 },
      { src: 'images/learning-11.jpeg', position: 50 },
      { src: 'images/learning-12.jpeg', position: 50 },
      { src: 'images/learning-13.jpeg', position: 50 },
      { src: 'images/learning-15.jpeg', position: 50 },
      { src: 'images/learning-16.jpeg', position: 50 },
      { src: 'images/learning-17.jpeg', position: 50 },
      { src: 'images/learning-18.jpeg', position: 50 },
      { src: 'images/learning-19.jpeg', position: 50 },
      { src: 'images/learning-20.jpeg', position: 50 },
      { src: 'images/learning-21.jpeg', position: 50 },
      { src: 'images/learning-22.jpeg', position: 50 },
      { src: 'images/learning-23.jpeg', position: 50 },
      { src: 'images/learning-24.jpeg', position: 50 },
    ],
    database: [], internal: [], access: []
  },
  projects: [
    { title: 'Introduction to Engineering (I2E)', category: 'engineering', label: 'Engineering foundation · 2024', summary: 'Foundational engineering design, technical drawing and practical fabrication.', detail: 'An introductory engineering project involving technical drawings, dimensional measurements and practical component fabrication. The accompanying photographs and drawings document the school project work.', skills: ['Engineering design','Technical drawing','Measurement','Fabrication'], images: [{ src: 'images/i2e-01.png', caption: 'Dimensioned plate drawing', fit: 'contain' }, { src: 'images/i2e-02.png', caption: 'Hole spacing detail', fit: 'contain' }, { src: 'images/i2e-03.png', caption: 'Partial dimension drawing', fit: 'contain' }, { src: 'images/i2e-04.png', caption: 'Annotated manufactured plate', fit: 'contain' }, { src: 'images/i2e-05.png', caption: 'Drilled plate', fit: 'contain' }, { src: 'images/i2e-06.png', caption: 'Strip end-hole dimensions', fit: 'contain' }, { src: 'images/i2e-07.png', caption: 'Strip hole offset', fit: 'contain' }], videos: [] },
    { title: 'Cornerstone Glider Project', category: 'engineering', label: 'Interdisciplinary engineering · 2025', summary: 'Design and construction of a lightweight glider integrating four disciplines.', detail: 'Combines CATIA modelling, Aircraft Structure, Fundamentals of Flight (FOF) and AMP practical work. The design requirements included frames, longerons, stringers, spars and ribs.', skills: ['CATIA','Aircraft Structure','FOF','AMP'], subjects: [
      { title:'CATIA', detail:'Computer-aided design and modelling, including assembly drawings, orthographic and isometric views, component modelling and technical documentation.', images: [
        { src: 'images/catia-01.jpeg', caption: 'Glider assembly drawing', fit: 'contain' },
        { src: 'images/catia-02.jpeg', caption: 'Rear support stand technical drawing', fit: 'contain' },
        { src: 'images/catia-03.jpeg', caption: 'Rear support stand 3D model', fit: 'contain' },
        { src: 'images/catia-04.jpeg', caption: 'Glider orthographic and isometric views', fit: 'contain' },
        { src: 'images/catia-05.jpeg', caption: 'Horizontal stabiliser drawing', fit: 'contain' },
        { src: 'images/catia-06.jpeg', caption: 'Glider assembly modelling workspace', fit: 'contain' }
      ], videos: [] },
      { title:'Aircraft Structure', detail:'Structural design and construction principles, with practical exposure to composite processing.', images: [
        { src:'images/AC-1.jpeg', caption:'Composite practical — photograph 1', fit:'contain' },
        { src:'images/AC-2.jpeg', caption:'Composite practical — photograph 2', fit:'contain' }
      ], videos: [
        { src:'images/AC-3.mp4', caption:'Aircraft Structure practical demonstration' }
      ] },
      { title:'FOF', detail:'Fundamentals of Flight and aerodynamic principles.', images: [], videos: [
        { src:'images/FOF-1.mp4', caption:'Fundamentals of Flight demonstration 1' },
        { src:'images/FOF-2.mp4', caption:'Fundamentals of Flight demonstration 2' }
      ] },
      { title:'AMP', detail:'Practical fabrication and assembly, including aircraft plumbing work.', images: [
        { src:'images/AMP-1.jpeg', caption:'Aircraft plumbing practical', fit:'contain' }
      ], videos: [] }
    ], images: [
      { src: 'images/glider-01.jpeg', caption: 'Physical glider prototype', fit: 'contain' },
      { src: 'images/glider-02.jpeg', caption: 'Completed glider in classroom', fit: 'contain' },
      { src: 'images/glider-03.jpeg', caption: 'Glider top view', fit: 'contain' },
      { src: 'images/glider-04.jpeg', caption: 'Glider and workshop apparatus', fit: 'contain' },
      { src: 'images/glider-05.jpeg', caption: 'Workshop apparatus', fit: 'contain' }
    ], videos: [
      { src: 'images/glider-01.mp4', caption: 'Cornerstone project video 1' },
      { src: 'images/glider-02.mp4', caption: 'Cornerstone project video 2' }
    ] },
    { title: 'Cargo Stock Check OCR', category: 'industry', label: 'SATS · CDIO · 2026', summary: 'An internship initiative exploring automated image-based data extraction.', detail: 'A trial using Apple Shortcuts processed 116 AWB photographs in approximately two minutes, with 111 successful results (95.7% in that test batch). Image quality and edge cases remained limitations.', skills: ['OCR','CDIO','Process improvement'], images: [
      // Original project visuals: local review only until publication permission is obtained.
      { src: 'images/ocr-01.png', caption: 'Apple Shortcuts workflow', fit: 'contain' },
      { src: 'images/ocr-02.png', caption: 'User journey map', fit: 'contain' },
      { src: 'images/ocr-03.png', caption: 'User interaction flowchart', fit: 'contain' },
      { src: 'images/ocr-04.png', caption: 'Decision-making flowchart', fit: 'contain' }
    ], videos: [] }
  ],
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

        // Digital Creations
        database: { src: 'images/portal-database.png', position: 50 },
        internal: { src: 'images/portal-internal.png', position: 50 },
        access: { src: 'images/portal-document-access.png', position: 50 },

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
  for (const initialise of [applyProfile, initialisePhotos, renderCertificates, renderWork, renderCollections, initialiseViewer, initialiseNavigation, initialiseTheme, initialiseReveal]) {
    try { initialise(); } catch (error) { console.error(initialise.name, error); }
  }
}

// V4: read-only image collections and project archive.
function element(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
}
function photoList(items) { return (Array.isArray(items) ? items : []).map(x => typeof x === 'string' ? {src:x} : x).filter(x => x && typeof x.src === 'string' && x.src.trim()); }
function collectionUI(key) {
  const root = element('div','collection small-collection'); root.dataset.gallery = key;
  return root;
}
function appendProjectMedia(parent,p,key){
  if(photoList(p.images).length) {
    const photos = collectionUI(key);
    photos.append(element('h4','','Project photographs'));
    parent.append(photos);
  }
  const items = photoList(p.videos);
  if (!items.length) return;
  const media = element('div','project-videos');
  media.append(element('h4','','Project videos'));
  const frame = element('div','single-carousel video-carousel');
  frame.setAttribute('role','group'); frame.setAttribute('aria-label','Project video collection');
  const video = element('video'); video.controls=true; video.muted=true; video.defaultMuted=true;
  video.playsInline=true; video.preload='metadata'; video.loop=true;
  const prev=element('button','carousel-arrow carousel-prev','‹');
  const next=element('button','carousel-arrow carousel-next','›');
  prev.type=next.type='button'; prev.setAttribute('aria-label','Previous video'); next.setAttribute('aria-label','Next video');
  const count=element('span','carousel-count'); count.setAttribute('aria-live','polite');
  const caption=element('p','video-carousel-caption');
  frame.append(video,prev,next,count); media.append(frame,caption); parent.append(media);
  prev.hidden=next.hidden=count.hidden=items.length<2;
  let index=0, visible=false, touch=null;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  function canPlay(){return visible && !document.hidden && !reduced.matches && !frame.closest('[hidden]') && !frame.closest('details:not([open])');}
  function syncPlayback(){if(canPlay()){video.muted=true;video.play().catch(()=>{});}else video.pause();}
  function show(){
    video.pause(); const item=items[index]; video.muted=true;
    video.src=item.src; video.setAttribute('aria-label',item.caption||`Project video ${index+1}`);
    caption.textContent=item.caption||`Project video ${index+1}`;
    count.textContent=`${index+1} / ${items.length}`;
    video.load(); if(canPlay())video.play().catch(()=>{});
  }
  function move(step){if(items.length<2)return;index=(index+step+items.length)%items.length;show();}
  prev.addEventListener('click',()=>move(-1)); next.addEventListener('click',()=>move(1));
  frame.addEventListener('keydown',e=>{if(e.target===video||items.length<2)return;if(['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}});
  frame.addEventListener('touchstart',e=>{const t=e.changedTouches[0];if(t.clientY>frame.getBoundingClientRect().bottom-48)return;touch=[t.clientX,t.clientY];},{passive:true});
  frame.addEventListener('touchend',e=>{if(!touch)return;const t=e.changedTouches[0],dx=t.clientX-touch[0],dy=t.clientY-touch[1];touch=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.4)move(dx<0?1:-1);},{passive:true});
  frame.addEventListener('touchcancel',()=>{touch=null;},{passive:true});
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){visible=entry.isIntersecting&&entry.intersectionRatio>=.6;syncPlayback();}},{threshold:[0,.6]});observer.observe(frame);}
  document.addEventListener('visibilitychange',syncPlayback);
  for(let node=parent;node;node=node.parentElement){if(node.tagName==='DETAILS')node.addEventListener('toggle',()=>{if(!node.open)video.pause();});}
  show();
}
function collectionItems(key){
  if(key.startsWith('subject-')){const [,p,s]=key.split('-');return PROFILE.projects[Number(p)]?.subjects?.[Number(s)]?.images;}
  if(key.startsWith('work-'))return PROFILE.projects[Number(key.slice(5))]?.images;
  return PROFILE.galleries[key];
}
function renderWork() {
  const grid=$('#workGrid'); if(!grid)return;
  PROFILE.projects.forEach((p,i)=>{
    const card=element('article','card project-card work-card');card.dataset.category=p.category;card.dataset.search=[p.title,p.summary,p.detail,...p.skills].join(' ').toLowerCase();
    const body=element('div','project-body');body.append(element('p','mini-label',p.label),element('h3','',p.title),element('p','',p.summary));
    const tags=element('div','tag-row');p.skills.forEach(t=>tags.append(element('span','',t)));body.append(tags);
    const details=element('details','more');details.append(element('summary','','View details'),element('p','',p.detail));body.append(details);
    appendProjectMedia(details,p,'work-'+i);
    for (const [si, subject] of (p.subjects||[]).entries()) {
      const panel=element('details','more subject-details'); panel.append(element('summary','',subject.title),element('p','',subject.detail));
      appendProjectMedia(panel,subject,`subject-${i}-${si}`); details.append(panel);
    }
    card.append(body);grid.append(card);
  });
  let category='all';const search=$('#projectSearch');
  function filter(){let count=0;$$('.work-card',grid).forEach(c=>{c.hidden=!(category==='all'||c.dataset.category===category)||!c.dataset.search.includes(search.value.trim().toLowerCase());if(!c.hidden)count++;});$('#noProjects').hidden=count!==0;}
  $$('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;$$('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));filter();}));search.addEventListener('input',filter);
}
let activePhotos=[],activeIndex=0,viewerTrigger=null;
function openViewer(items,index,trigger){const dialog=$('#photoViewer');if(!dialog||!items.length)return;activePhotos=items;activeIndex=index;viewerTrigger=trigger;updateViewer();if(!dialog.open)dialog.showModal();$('#viewerClose').focus();}
function updateViewer(){const item=activePhotos[activeIndex];if(!item)return;const img=$('#viewerImage');img.src=item.src;img.alt=item.caption||'Portfolio photograph';$('#viewerCaption').textContent=item.caption||'';$('#viewerCounter').textContent=`${activeIndex+1} / ${activePhotos.length}`;$('#viewerPrev').hidden=$('#viewerNext').hidden=activePhotos.length<2;}
function moveViewer(step){activeIndex=(activeIndex+step+activePhotos.length)%activePhotos.length;updateViewer();}
// V4.5: one fixed frame per collection. Only the selected image is displayed.
function makeCarousel(frame, items, label) {
  items = photoList(items);
  if (!items.length) return;
  frame.classList.add('single-carousel');
  frame.setAttribute('role','group'); frame.setAttribute('aria-label',label);
  frame.replaceChildren();
  const launch = element('button','carousel-image-button'); launch.type='button';
  const img = element('img','carousel-image'); img.draggable=false; launch.append(img);
  const fallback = element('span','carousel-missing','Photograph unavailable'); fallback.hidden=true;
  launch.append(fallback); frame.append(launch);
  let index=0, startX=null, startY=null, suppressClick=false;
  const prev=element('button','carousel-arrow carousel-prev','‹');
  const next=element('button','carousel-arrow carousel-next','›');
  prev.type=next.type='button'; prev.setAttribute('aria-label','Previous photograph'); next.setAttribute('aria-label','Next photograph');
  const count=element('span','carousel-count'); count.setAttribute('aria-live','polite');
  const caption=element('span','carousel-caption');
  frame.append(prev,next,count,caption);
  prev.hidden=next.hidden=count.hidden=items.length<2;
  function show(){
    const item=items[index]; const desc=item.caption||`${label} — photograph ${index+1}`;
    img.hidden=false; fallback.hidden=true;
    img.alt=desc; img.style.objectFit=item.fit==='contain'?'contain':'cover';
    img.style.objectPosition=`50% ${Math.max(0,Math.min(100,Number(item.position??50)||0))}%`;
    launch.setAttribute('aria-label',`Enlarge ${desc}`);
    img.src=item.src; count.textContent=`${index+1} / ${items.length}`;
    caption.textContent=item.caption||''; caption.hidden=!item.caption;
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches && img.animate) img.animate([{opacity:.65},{opacity:1}],{duration:220});
  }
  img.addEventListener('error',()=>{img.hidden=true;fallback.hidden=false;});
  img.addEventListener('load',()=>{img.hidden=false;fallback.hidden=true;});
  function move(step){if(items.length<2)return;index=(index+step+items.length)%items.length;show();}
  prev.addEventListener('click',()=>move(-1)); next.addEventListener('click',()=>move(1));
  launch.addEventListener('click',()=>{if(!suppressClick&&!img.hidden)openViewer(items,index,launch);suppressClick=false;});
  frame.addEventListener('keydown',e=>{if(items.length>1 && ['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();move(e.key==='ArrowLeft'?-1:1);}});
  launch.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX;startY=e.changedTouches[0].clientY;suppressClick=false;},{passive:true});
  launch.addEventListener('touchend',e=>{if(startX===null)return;const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;startX=startY=null;if(items.length>1&&Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.3){suppressClick=true;move(dx<0?1:-1);setTimeout(()=>{suppressClick=false;},350);}},{passive:true});
  launch.addEventListener('touchcancel',()=>{startX=startY=null;},{passive:true});
  show();
}
function renderCollections(){
  // Merge the existing cover with extra photographs for journey and portal cards.
  for(const key of ['sats','education','gameco','database','internal','access']){
    const frame=photoNodes.get(key); if(!frame)continue;
    const main=PROFILE.photos[key]; const label=$('img',frame)?.alt||key;
    const base=main?.src?[{...main,fit: ['database','internal','access'].includes(key)?'contain':main.fit}]:[];
    const extra=photoList(PROFILE.galleries[key]);
    const items=[...base,...extra.filter(x=>x.src!==main?.src)];
    if(items.length>1)makeCarousel(frame,items,label);
  }
  // Render the remaining independent gallery collections.
  $$('[data-gallery]').forEach(root=>{
    const key=root.dataset.gallery, items=photoList(collectionItems(key));
    root.hidden=!items.length; if(!items.length)return;
    const label=$('h3,h4',root)?.textContent||'Project photographs';
    const old=$('.photo-track',root); if(old)old.remove();
    const controls=$('.collection-controls',root); if(controls)controls.remove();
    const frame=element('div','media collection-frame');root.append(frame);makeCarousel(frame,items,label);
  });
}
function initialiseViewer(){
  const dialog=$('#photoViewer');if(!dialog)return;
  $('#viewerClose').addEventListener('click',()=>dialog.close());$('#viewerPrev').addEventListener('click',()=>moveViewer(-1));$('#viewerNext').addEventListener('click',()=>moveViewer(1));
  dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();moveViewer(-1);}if(e.key==='ArrowRight'){e.preventDefault();moveViewer(1);}});dialog.addEventListener('close',()=>{if(viewerTrigger?.isConnected)viewerTrigger.focus();$('#viewerImage').removeAttribute('src');});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  $$('[data-photo]:not(.single-carousel) img,#certificateGrid img').forEach(img=>{const launch=()=>{if(img.hidden||!img.naturalWidth)return;openViewer([{src:img.currentSrc||img.src,caption:img.alt}],0,img);};img.addEventListener('click',launch);img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label',`Enlarge ${img.alt}`);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();launch();}});});
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startPortfolio, { once: true });
} else {
  startPortfolio();
}

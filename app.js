/**
 * Gezellig Royal Desserts - Core Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCalculator();
  initSnackShowcase();
  initHeaderScroll();
});

/* -------------------------------------------------------------------------- */
/* 1. VIEW ROUTER & NAVIGATION CONTROLLER                                     */
/* -------------------------------------------------------------------------- */
function initNavigation() {
  const routes = document.querySelectorAll('.nav-route');
  const pageViews = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const scrollHowBtn = document.getElementById('scroll-to-how');

  function switchView(targetViewId, hash) {
    pageViews.forEach(view => {
      if (view.id === targetViewId) {
        view.classList.add('active-view');
      } else {
        view.classList.remove('active-view');
      }
    });

    // Update nav active states
    navLinks.forEach(link => {
      const linkTarget = link.getAttribute('data-target');
      if (linkTarget === targetViewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    if (navMenu) navMenu.classList.remove('open');

    // Scroll to top or target hash
    if (hash && hash === '#how-it-works') {
      const howSection = document.getElementById('how-it-works');
      if (howSection) howSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Handle clicked route links
  routes.forEach(route => {
    route.addEventListener('click', (e) => {
      const targetViewId = route.getAttribute('data-target');
      const href = route.getAttribute('href');
      
      if (targetViewId) {
        switchView(targetViewId, href);
      }
    });
  });

  // Scroll to How It Works from hero
  if (scrollHowBtn) {
    scrollHowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home-view', '#how-it-works');
    });
  }

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Initial load hash detection
  const currentHash = window.location.hash;
  if (currentHash) {
    if (currentHash === '#birthday-desserts') switchView('birthday-view');
    else if (currentHash === '#office-snacks') switchView('snacks-view');
    else if (currentHash === '#for-businesses') switchView('business-view');
    else if (currentHash === '#partners') switchView('partners-view');
    else if (currentHash === '#contact') switchView('contact-view');
    else if (currentHash === '#how-it-works') switchView('home-view', '#how-it-works');
  }
}

/* -------------------------------------------------------------------------- */
/* 2. HR APPRECIATION SAVINGS CALCULATOR                                      */
/* -------------------------------------------------------------------------- */
function initCalculator() {
  const slider = document.getElementById('emp-slider');
  const empDisplay = document.getElementById('emp-count-val');
  const hoursDisplay = document.getElementById('saved-hours-display');
  const treatsDisplay = document.getElementById('treats-display');

  if (!slider) return;

  function updateCalc() {
    const count = parseInt(slider.value, 10);
    empDisplay.textContent = `${count} Employees`;
    
    // Formula: Avg 1.5 hours saved per employee birthday celebration setup + ordering
    const savedHours = Math.round(count * 1.5);
    hoursDisplay.textContent = `${savedHours} Hours`;
    treatsDisplay.textContent = `${count} Celebrations`;
  }

  slider.addEventListener('input', updateCalc);
  updateCalc();
}

/* -------------------------------------------------------------------------- */
/* 3. CURATED SNACK SHOWCASE FILTER                                           */
/* -------------------------------------------------------------------------- */
function initSnackShowcase() {
  const tabs = document.querySelectorAll('.snack-tab-btn');
  const items = document.querySelectorAll('.snack-item-card');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      items.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease-in-out';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 4. SCROLLED HEADER EFFECT                                                  */
/* -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* -------------------------------------------------------------------------- */
/* 5. CONTACT FORM HANDLER                                                    */
/* -------------------------------------------------------------------------- */
window.handleContactSubmit = function() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success');
  
  if (form && successBox) {
    form.style.display = 'none';
    successBox.style.display = 'block';
    successBox.scrollIntoView({ behavior: 'smooth' });
  }
};

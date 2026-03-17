// ============================================
// TESTIMATOR.AI - Interactive Scripts
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileNav();
  initScrollAnimations();
  initCountUp();
  initCalculator();
  initDemoForm();
});

// --- Sticky Nav ---
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// --- Mobile Nav ---
function initMobileNav() {
  const toggle = document.getElementById('mobileToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // Close on link click
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

// --- Count-Up Animation ---
function initCountUp() {
  const stats = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          stats.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            animateNumber(stat, 0, target, 1500);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) observer.observe(statsBar);
}

function animateNumber(el, start, end, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// --- ROI Calculator ---
function initCalculator() {
  const qaCount = document.getElementById('qaCount');
  const salary = document.getElementById('salary');
  const cycleTime = document.getElementById('cycleTime');

  if (!qaCount || !salary || !cycleTime) return;

  const qaCountVal = document.getElementById('qaCountVal');
  const salaryVal = document.getElementById('salaryVal');
  const cycleTimeVal = document.getElementById('cycleTimeVal');
  const currentCost = document.getElementById('currentCost');
  const newCost = document.getElementById('newCost');
  const savingsAmount = document.getElementById('savingsAmount');
  const savingsBar = document.getElementById('savingsBar');
  const savingsPercent = document.getElementById('savingsPercent');

  function calculate() {
    const qa = parseInt(qaCount.value);
    const sal = parseInt(salary.value);
    const cycle = parseInt(cycleTime.value);

    // Update display values
    qaCountVal.textContent = qa;
    salaryVal.textContent = '$' + sal.toLocaleString();
    cycleTimeVal.textContent = cycle + ' days';

    // Calculate costs
    const annualManual = qa * sal * 12;
    const platformCost = 600; // base platform
    const coordinatorCost = sal; // 1 coordinator
    const annualNew = (platformCost + coordinatorCost) * 12;
    const savings = annualManual - annualNew;
    const savingsPct = Math.round((savings / annualManual) * 100);

    // Update results with animation
    currentCost.textContent = '$' + annualManual.toLocaleString();
    newCost.textContent = '$' + annualNew.toLocaleString();
    savingsAmount.textContent = '$' + Math.max(0, savings).toLocaleString();
    savingsBar.style.width = Math.max(0, savingsPct) + '%';
    savingsPercent.textContent = `You save ${Math.max(0, savingsPct)}% of your QA budget`;
  }

  qaCount.addEventListener('input', calculate);
  salary.addEventListener('input', calculate);
  cycleTime.addEventListener('input', calculate);

  // Initial calculation
  calculate();
}

// --- Demo Form ---
function initDemoForm() {
  const form = document.getElementById('demoForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const company = document.getElementById('userCompany').value;
    const appUrl = document.getElementById('userApp').value;

    const message = `New Demo Request!\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nApp URL: ${appUrl}`;

    // Show success state
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span>Demo Booked! We\'ll reach out within 2 hours.</span>';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    btn.disabled = true;

    // Reset after 4 seconds
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);

    // Log for integration (replace with actual API call)
    console.log('Demo request:', { name, email, company, appUrl });
  });
}

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
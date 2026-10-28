/**
 * AVA Systems - Interactive Sales Experience
 * Features: Pricing toggle, Mockup tabs, FAQ accordion, Stats counter,
 * WhatsApp integration, Social proof toast, Modal control.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close mobile menu on clicking any link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 2. Stats Counter Animation (IntersectionObserver)
  const statsElements = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statsElements.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const isFloat = target % 1 !== 0;
          let current = 0;
          const step = target / 50;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            if (isFloat) {
              el.textContent = current.toFixed(2) + '%';
            } else {
              el.textContent = '+' + Math.floor(current) + (el.getAttribute('data-target') === '340' ? '%' : '');
            }
          }, 25);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats-row');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 6. Modal Control
  const demoModal = document.getElementById('demoModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnOpenDemoNav = document.getElementById('btnOpenDemoNav');
  const btnOpenDemoHero = document.getElementById('btnOpenDemoHero');
  const modalPlanSelected = document.getElementById('modalPlanSelected');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');

  window.openModal = function(planName = 'Demonstração Interativa') {
    if (modalPlanSelected) modalPlanSelected.value = planName;
    if (modalTitle) {
      modalTitle.textContent = planName.includes('Plano') 
        ? `Contratar ${planName}` 
        : 'Experimente a AVA Systems';
    }
    if (modalBadge) {
      modalBadge.textContent = planName.includes('Plano') ? 'Plano Selecionado' : 'Demonstração Interativa';
    }
    if (demoModal) {
      demoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function() {
    if (demoModal) {
      demoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.selectPlan = function(planName) {
    openModal(`Plano ${planName}`);
  };

  window.openSystemPurchase = function(systemName) {
    if (modalPlanSelected) modalPlanSelected.value = systemName;
    if (modalTitle) modalTitle.textContent = `Contratar ${systemName}`;
    if (modalBadge) modalBadge.textContent = 'Ativação de Sistema';
    const modalSubtitle = document.getElementById('modalSubtitle');
    if (modalSubtitle) {
      modalSubtitle.textContent = `Preencha seus dados para prosseguir com a contratação e ativação imediata do ${systemName}.`;
    }
    if (demoModal) {
      demoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
  if (btnOpenDemoNav) btnOpenDemoNav.addEventListener('click', () => openModal('Demonstração VIP'));
  if (btnOpenDemoHero) btnOpenDemoHero.addEventListener('click', () => openModal('Demonstração Interativa'));

  if (demoModal) {
    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });
  }

  // 7. Form Handlers & Direct WhatsApp Connection
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('leadName').value;
      const email = document.getElementById('leadEmail').value;
      const phone = document.getElementById('leadPhone').value;
      const team = document.getElementById('leadTeam').value;

      const message = encodeURIComponent(
        `Olá AVA Systems! Meu nome é ${name}.\n` +
        `Empresa/Equipe: ${team} colaboradores\n` +
        `E-mail: ${email}\n` +
        `Telefone: ${phone}\n` +
        `Gostaria de agendar uma demonstração guiada e conhecer os planos!`
      );

      // Open WhatsApp
      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
      alert('Obrigado, ' + name + '! Redirecionando para nosso canal exclusivo no WhatsApp.');
      leadForm.reset();
    });
  }

  const modalForm = document.getElementById('modalForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName').value;
      const phone = document.getElementById('modalPhone').value;
      const plan = modalPlanSelected.value;

      const message = encodeURIComponent(
        `Olá AVA Systems! Meu nome é ${name}.\n` +
        `WhatsApp: ${phone}\n` +
        `Tenho interesse em: ${plan}\n` +
        `Poderiam me orientar nos próximos passos?`
      );

      window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
      closeModal();
      modalForm.reset();
    });
  }

  // 8. Social Toast Simulation (Real-time proof of sales)
  const socialToast = document.getElementById('socialToast');
  const toastAvatar = document.getElementById('toastAvatar');
  const toastMessage = document.getElementById('toastMessage');

  const notifications = [
    { initials: 'RC', msg: 'Roberto C. assinou o Plano Professional AVA', time: 'há 3 minutos' },
    { initials: 'PL', msg: 'Dra. Patrícia L. ativou o EdupsychPro Clínico', time: 'há 5 minutos' },
    { initials: 'MV', msg: 'Marcos V. ativou o Kit-Assessor Pessoal no WhatsApp', time: 'há 8 minutos' },
    { initials: 'AL', msg: 'Ana Luísa agendou uma Demonstração VIP', time: 'há 11 minutos' },
    { initials: 'GS', msg: 'Gabriel S. assinou o EdupsychPro com suporte anual', time: 'há 16 minutos' }
  ];

  let toastIdx = 0;
  function triggerSocialToast() {
    if (!socialToast) return;
    const current = notifications[toastIdx];
    toastAvatar.textContent = current.initials;
    toastMessage.textContent = current.msg;
    
    socialToast.classList.add('visible');

    setTimeout(() => {
      socialToast.classList.remove('visible');
    }, 4500);

    toastIdx = (toastIdx + 1) % notifications.length;
  }

  // Initial trigger after 3s, then every 14s
  setTimeout(triggerSocialToast, 3000);
  setInterval(triggerSocialToast, 14000);
});

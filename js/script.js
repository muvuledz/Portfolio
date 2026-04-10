// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // Set active sidebar link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('formName')?.value || '';
      const email = document.getElementById('formEmail')?.value || '';
      const message = document.getElementById('formMessage')?.value || '';
      
      if (name && email && message) {
        formStatus.innerHTML = '<span style="color: #b47c48;">✨ Message sent successfully! I\'ll get back to you soon.</span>';
        contactForm.reset();
        
        setTimeout(() => {
          formStatus.innerHTML = '';
        }, 5000);
      } else {
        formStatus.innerHTML = '<span style="color: #ff6666;">⚠️ Please fill in all required fields.</span>';
        
        setTimeout(() => {
          formStatus.innerHTML = '';
        }, 3000);
      }
    });
  }
  
  // Scroll animations for clay cards
  const clayCards = document.querySelectorAll('.clay-card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  clayCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
  
  // Progress bar animation
  const progressBars = document.querySelectorAll('.progress');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = width;
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });
});
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          const element = entry.target;
          const progress = element.getAttribute('data-progress');
          element.style.setProperty('--progress', progress); 
          element.classList.add('animate');
          
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 1
    });

    document.querySelectorAll('.circle_prog').forEach(element => {
      observer.observe(element);
    });
  });
document.addEventListener('DOMContentLoaded', () => {
    // Animación de entrada en la página para los profesores
    const docentes = document.querySelectorAll('.docente');
    docentes.forEach((docente, index) => {
      setTimeout(() => {
        docente.style.opacity = '1';
        docente.style.transform = 'translateY(0)';
      }, index * 300);  // Retrasa la animación para cada docente
    });
  
    // Efecto al pasar el mouse sobre los docentes
    docentes.forEach((docente) => {
      docente.addEventListener('mouseenter', () => {
        docente.style.transform = 'scale(1.05)';
        docente.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        docente.style.boxShadow = '0px 10px 15px rgba(0, 0, 0, 0.2)';
      });
  
      docente.addEventListener('mouseleave', () => {
        docente.style.transform = 'scale(1)';
        docente.style.boxShadow = 'none';
      });
    });
  
    // Menú interactivo con animación de despliegue
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.querySelector('.menu-icono');
  
    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
      navbar.style.transition = 'all 0.5s ease';
    });
  
    // Efectos basados en scroll para destacar secciones
    window.addEventListener('scroll', () => {
      const secciones = document.querySelectorAll('.categoria');
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      secciones.forEach((seccion) => {
        const offsetTop = seccion.offsetTop - window.innerHeight / 1.3;
        if (scrollTop > offsetTop) {
          seccion.style.opacity = '1';
          seccion.style.transform = 'translateX(0)';
        } else {
          seccion.style.opacity = '0';
          seccion.style.transform = 'translateX(-50px)';
        }
      });
    });
  });
  
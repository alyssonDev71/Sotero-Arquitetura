// Menu Hambúrguer
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});

// Interatividade do Navbar
const navLinksItems = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinksItems.forEach(link => {
  const linkPage = link.getAttribute('href');


  link.classList.remove('active');


  if (linkPage === currentPage ||
    (currentPage === '' && linkPage === 'index.html') ||
    (currentPage === 'projetos-single.html' && linkPage === 'projetos-single.html')) {
    link.classList.add('active');
  }

  // Adiciona evento de clique para marcar como ativo
  link.addEventListener('click', function (e) {

    navLinksItems.forEach(otherLink => {
      otherLink.classList.remove('active');
    });


    this.classList.add('active');
  });
});
// Scroll suave para a seção Ficha Técnica
const fichaTecnicaButton = document.querySelector('.ficha-botao');
const fichaTecnicaSection = document.querySelector('.ficha-tecnica');

if (fichaTecnicaButton && fichaTecnicaSection) {
  fichaTecnicaButton.addEventListener('click', function () {
    fichaTecnicaSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

const compartilharButton = document.querySelector('.compartilhar');

if (compartilharButton) {
  compartilharButton.addEventListener('click', async function () {
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    const shareData = {
      title: pageTitle,
      text: 'Confira este projeto da Sotero Arquitetura',
      url: pageUrl
    };

    try {
      // Verifica se a Web Share API está disponível
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copia o link para a área de transferência
        await navigator.clipboard.writeText(pageUrl);

        // Feedback visual temporário
        const originalText = compartilharButton.textContent;
        compartilharButton.textContent = 'LINK COPIADO!';
        compartilharButton.style.backgroundColor = '#4CAF50';
        compartilharButton.style.color = 'white';

        setTimeout(() => {
          compartilharButton.textContent = originalText;
          compartilharButton.style.backgroundColor = '';
          compartilharButton.style.color = '';
        }, 2000);
      }
    } catch (error) {
      console.log('Erro ao compartilhar:', error);

      // Fallback manual se clipboard também falhar
      const originalText = compartilharButton.textContent;
      compartilharButton.textContent = 'ERRO AO COMPARTILHAR';
      compartilharButton.style.backgroundColor = '#f44336';
      compartilharButton.style.color = 'white';

      setTimeout(() => {
        compartilharButton.textContent = originalText;
        compartilharButton.style.backgroundColor = '';
        compartilharButton.style.color = '';
      }, 2000);
    }
  });
};



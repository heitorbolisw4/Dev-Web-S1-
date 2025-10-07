// Script para a página infosblockchain.html
(function(){
  // Smooth scroll to topics when clicking 'Explorar Casos'
  const btn = document.getElementById('learn-more-btn');
  if(btn){
    btn.addEventListener('click', () => {
      const topics = document.querySelector('.topics');
      if(topics) topics.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Newsletter formulario
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('form-msg');

  function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      msg.textContent = '';

      if(name.length < 2){
        msg.textContent = 'Por favor insira seu nome.';
        msg.style.color = '#c92a2a';
        return;
      }
      if(!validateEmail(email)){
        msg.textContent = 'Por favor insira um email válido.';
        msg.style.color = '#c92a2a';
        return;
      }

      // Simula chamada assíncrona para inscrição
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Inscrever';
        msg.textContent = 'Obrigado! Verifique seu email para confirmar a inscrição.';
        msg.style.color = '#0a9b57';
        form.reset();
      }, 1100);
    });
  }
})();

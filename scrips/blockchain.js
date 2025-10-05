// ícone BTC animado ao passar o mouse sobre o botão .btn3
(function(){
  const btn = document.querySelector('.btn3');
  if(btn){
    const imgSrc = '../assets/img/imgblockchain/btclogo.png';

    // cria elemento inline
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'btc-inline';
    btn.appendChild(img);

    // mostrar enquanto o mouse estiver sobre o botão
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('btc-visible');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('btc-visible');
    });

    // click: navegar para a página de cotações
    btn.addEventListener('click', (e) => {
      
      window.location.href = '../pages/cotações.html';
    });
  }

  
  function attachNavAnimationSetter(){
    
    const anchors = Array.from(document.querySelectorAll('a[href*="kaua.html"]'));
    anchors.forEach(a => {
      a.addEventListener('click', (ev) => {
        try{
          
          const target = new URL(a.href, location.href);
          if(target.pathname !== location.pathname){
            sessionStorage.setItem('animate-kaua', '1');
            
          }
        }catch(err){
          
          sessionStorage.setItem('animate-kaua', '1');
        }
      });
    });
  }

  function runEntranceAnimationIfNeeded(){
    if(sessionStorage.getItem('animate-kaua') !== '1') return;
    
    sessionStorage.removeItem('animate-kaua');

    
      // lista de seletores leves para animar, evitando contêineres pesados de imagens
      const selectors = [
        'main .center',
        'main .textoBlock',
        'main .container-botoes',
        'main .cta-hero',
        'main .img-hero',
        'main .timeline',
        'main .timeline-item',
        'main .timeline-content'
      ];

      const elements = [];
      selectors.forEach(sel => {
        Array.from(document.querySelectorAll(sel)).forEach(node => {
          
          if(node.closest && node.closest('header')) return;
          if(node.classList && node.classList.contains('btn3')) return;
          if(node.tagName === 'IMG') return;
          if(node.querySelector && node.querySelector('img')) {
          
          }
          elements.push(node);
        });
      });

    if(elements.length === 0) return;

    elements.forEach(el => el.classList.add('anim-hidden'));

    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('anim-show');
      }, i * 60 + 120);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    attachNavAnimationSetter();
    runEntranceAnimationIfNeeded();
  });

})();

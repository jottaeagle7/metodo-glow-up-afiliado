// CTAs de compra apontam diretamente ao checkout com o ID de afiliado fornecido.
const CHECKOUT='https://pay.cakto.com.br/e3id8y9_828193?affiliate=Sag73ioz';
const buttons=document.querySelectorAll('a[data-cta]');
buttons.forEach(a=>{const u=new URL(CHECKOUT);u.searchParams.set('utm_source','tiktok');u.searchParams.set('utm_medium','organic');u.searchParams.set('utm_campaign','glowup_afiliado');u.searchParams.set('utm_content',a.dataset.cta);a.href=u.toString();});
const quiz=document.querySelector('#quiz');
quiz.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{quiz.querySelector('.quiz-options').hidden=true;quiz.querySelector('.quiz-result').hidden=false;}));
quiz.querySelector('.restart').addEventListener('click',()=>{quiz.querySelector('.quiz-options').hidden=false;quiz.querySelector('.quiz-result').hidden=true;});
document.querySelector('#year').textContent=new Date().getFullYear();
